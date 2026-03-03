import Link from "next/link";
import TextType from './TextType';

export default function Card() {
  return (
 <section className="py-4 ">
  <div className="container">
     <div className="flex justify-center mb-8">
          <img
            src="/Logo.png"
            alt="Dakka Marrakechia Nassim"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
    <h1 className="text-center text-4xl font-semibold lg:text-6xl">
      Was wir bieten  </h1>
      <h1 className="text-center text-4xl font-semibold lg:text-6xl">
         Dakka Marrakechia Nassim
     
    </h1>

    <p className="mx-auto mt-5 max-w-3xl text-center text-zinc-600">
      Wir bringen die authentische marokkanische Hochzeitsstimmung nach Deutschland – mit traditionellen
      Trommeln, Gesang und einem unvergesslichen Empfang für Braut & Gäste.
    </p>

    <div className="grid gap-6 pt-9 text-center md:grid-cols-3 lg:pt-20">
    
      <div className="rounded-lg border text-card-foreground shadow-sm border-none bg-zinc-100 p-8 lg:p-10">
        <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
         Brautabholung
        </p>
        <p className="text-zinc-600">
          Traditioneller Start mit Dakka-Rhythmen – wir begleiten die Braut festlich bis zur Location.
        </p>
      </div>

      <div className="rounded-lg border text-card-foreground shadow-sm border-none bg-zinc-100 p-8 lg:p-10">
        <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
         Saalempfang
        </p>
        <p className="text-zinc-600">
          Spektakulärer Einzug mit Trommeln & Gesang – echtes Marrakesch-Feeling im Saal.
        </p>
      </div>

      <div className="rounded-lg border text-card-foreground shadow-sm border-none bg-zinc-100 p-8 lg:p-10">
        <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
          Gästeempfang
        </p>
        <p className="text-zinc-600">
          Begrüßung Ihrer Gäste mit Musik & Show – der perfekte Start für Stimmung und Fotos.
        </p>
      </div>

      <div className="rounded-lg border text-card-foreground shadow-sm border-none bg-zinc-100 p-8 lg:p-10">
        <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
          Ganzer Abend
        </p>
        <p className="text-zinc-600">
          Begleitung über den Abend – starke Momente bei jedem Programmpunkt & Kleidwechsel.
        </p>
      </div>

      <div className="rounded-lg border text-card-foreground shadow-sm border-none bg-zinc-100 p-8 lg:p-10">
        <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
          Henna & Verlobung
        </p>
        <p className="text-zinc-600">
          Perfekt für Henna-Abende, Verlobungen & Familienfeiern (z.B. 18:00–24:00 Uhr).
        </p>
      </div>

      <div className="rounded-lg border text-card-foreground shadow-sm border-none bg-zinc-100 p-8 lg:p-10">
        <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
          Show-Highlights
        </p>
        <p className="text-zinc-600">
          Auf Wunsch mit Extra-Shows wie Bola Bola oder Dabke – für noch mehr Energie und wow-Momente.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}