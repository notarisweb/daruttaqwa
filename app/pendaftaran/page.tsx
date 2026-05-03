import FormDaftar from "@/components/FormDaftar";

export default function RegistrationPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 flex justify-center px-4 py-16">
      <section
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-10 relative"
        style={{ marginTop: "90px" }}
      >
        <FormDaftar />
      </section>
    </main>
  );
}