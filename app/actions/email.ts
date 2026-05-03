"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/* ================= HELPER ================= */
function safe(val: FormDataEntryValue | null) {
  return typeof val === "string" ? val.trim() : "";
}

/* ================= ACTION ================= */
export async function kirimPendaftaran(formData: FormData) {
  try {
    /* ===== ambil & validasi data ===== */
    const data = {
      namaSantri: safe(formData.get("namaSantri")),
      tanggalLahir: safe(formData.get("tanggalLahir")),
      namaWali: safe(formData.get("namaWali")),
      alamat: safe(formData.get("alamat")),
      whatsapp: safe(formData.get("whatsapp")),
    };

    // 🔒 validasi wajib
    if (!data.namaSantri || !data.tanggalLahir || !data.namaWali || !data.whatsapp) {
      return {
        success: false,
        message: "Data belum lengkap. Mohon isi semua field wajib.",
      };
    }

    // 🔒 validasi API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY belum di-set");
      return {
        success: false,
        message: "Server belum dikonfigurasi (API Key Kosong).",
      };
    }

    /* ===== kirim email ===== */
    const { data: resData, error: resError } = await resend.emails.send({
      // 🟢 Update: Gunakan domain yang sudah verified
      from: "Darut Taqwa <admin@daruttaqwabanyumas.com>",
      
      // 🟢 Update: Sekarang bebas kirim ke email admin mana pun
      to: ["admin@daruttaqwabanyumas.com"], 
      
      subject: `Pendaftaran Baru: ${data.namaSantri}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #222; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #1e2f65; border-bottom: 2px solid #1a9c69; padding-bottom: 10px;">
            Data Calon Santri Baru
          </h2>
          <p><strong>Nama:</strong> ${data.namaSantri}</p>
          <p><strong>Tanggal Lahir:</strong> ${data.tanggalLahir}</p>
          <p><strong>Wali:</strong> ${data.namaWali}</p>
          <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
          <p><strong>Alamat:</strong> ${data.alamat}</p>
          <hr style="margin:20px 0;" />
          <p style="font-size:12px;color:#777;">
            Otomatis dari sistem daruttaqwabanyumas.com
          </p>
        </div>
      `,
    });

    /* ===== handle response ===== */
    if (resError) {
      console.error("RESEND ERROR:", resError);
      return {
        success: false,
        message: `Gagal: ${resError.message}`,
      };
    }

    return {
      success: true,
      message: "Pendaftaran berhasil dikirim ke email admin!",
    };

  } catch (err: any) {
    console.error("SERVER ERROR:", err);
    return {
      success: false,
      message: "Terjadi kesalahan internal server.",
    };
  }
}