"use client";

import { useState } from "react";
import { kirimPendaftaran } from "@/app/actions/email";

export default function FormDaftar() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      const formData = new FormData(e.currentTarget);

      const result = await kirimPendaftaran(formData);

      // 🔒 guard biar gak crash
      if (!result || typeof result !== "object") {
        throw new Error("Response tidak valid dari server");
      }

      if (result.success) {
        setStatus({ type: "success", msg: result.message || "Berhasil dikirim!" });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: "error", msg: result.message || "Gagal mengirim" });
      }

    } catch (error: any) {
      console.error("SUBMIT ERROR:", error);

      setStatus({
        type: "error",
        msg: "Terjadi kesalahan. Silakan coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "30px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
      <h2 style={{ color: "#1e2f65", marginBottom: "20px", textAlign: "center" }}>
        Formulir Pendaftaran
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <div>
          <label style={labelStyle}>Nama Lengkap Santri</label>
          <input name="namaSantri" required placeholder="Masukkan nama lengkap" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Tanggal Lahir</label>
          <input name="tanggalLahir" type="date" required style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Nama Wali Santri</label>
          <input name="namaWali" required placeholder="Nama ayah / ibu / wali" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Nomor WhatsApp</label>
          <input name="whatsapp" type="tel" required placeholder="Contoh: 08123456789" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Alamat Lengkap</label>
          <textarea name="alamat" rows={4} required placeholder="Dusun, RT/RW, Desa..." style={inputStyle} />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: loading ? "#ccc" : "#1e2f65",
            color: "#fff",
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sedang Mengirim..." : "Kirim Pendaftaran"}
        </button>

        {status.msg && (
          <p
            style={{
              textAlign: "center",
              padding: "10px",
              borderRadius: "6px",
              fontSize: "14px",
              backgroundColor: status.type === "success" ? "#d4edda" : "#f8d7da",
              color: status.type === "success" ? "#155724" : "#721c24",
            }}
          >
            {status.msg}
          </p>
        )}
      </form>
    </div>
  );
}

/* ===== style helper ===== */
const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "14px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ddd",
  fontSize: "15px",
  outline: "none",
};