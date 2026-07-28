import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-screen flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold text-accent">404</p>
      <h1 className="mt-4 text-4xl font-bold">මෙම පිටුව සොයාගත නොහැක</h1>
      <p className="mt-4 max-w-xl text-muted">ඔබ ඉල්ලූ පිටුව වෙනස් වී ඇති හෝ තාවකාලිකව නොමැති විය හැක.</p>
      <ButtonLink className="mt-8" href="/">
        මුල් පිටුවට යන්න
      </ButtonLink>
    </div>
  );
}
