import React from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/WissenHonig.css";

export default function WissenHonig() {
  return (
    <HauptLayout>
      <div className="wissen-container">
        <h1>Wissenswertes über Honig</h1>

        <p className="einleitung">
          Honig ist eines der ältesten und natürlichsten Lebensmittel der Welt.
          Seit Jahrtausenden schätzen Menschen seinen süßen Geschmack und seine
          gesundheitsfördernden Eigenschaften. Hier erfährst du 20 spannende
          Fakten über die Entstehung, Vielfalt und Besonderheiten des Honigs.
        </p>

        <section className="wissen-block">
          <h2>Entstehung und Verarbeitung</h2>
          <ol>
            <li>
              Honig entsteht, wenn Bienen Nektar oder Honigtau sammeln und ihn
              durch Enzyme und Wasserentzug im Bienenstock umwandeln.
            </li>
            <li>
              Der Wassergehalt eines reifen Honigs liegt bei etwa 16–18 %.
              Dadurch ist er lange haltbar.
            </li>
            <li>
              Bienen lagern den Honig in sechseckigen Waben, die aus Wachs
              bestehen – eine perfekte Konstruktion für maximale Stabilität bei
              minimalem Materialverbrauch.
            </li>
            <li>
              Imker schleudern den Honig nach der Ernte aus den verdeckelten
              Waben. Danach wird er gesiebt, gerührt und in Gläser abgefüllt.
            </li>
            <li>
              Bei zu hoher Luftfeuchtigkeit kann Honig gären – deshalb wird er
              erst geschleudert, wenn er ausreichend „reif“ ist.
            </li>
          </ol>
        </section>

        <section className="wissen-block">
          <h2>Sorten und Geschmacksvielfalt</h2>
          <ol start="6">
            <li>
              Die Farbe des Honigs reicht von fast farblos (z. B. Akazienhonig)
              bis dunkelbraun (z. B. Waldhonig).
            </li>
            <li>
              Der Geschmack hängt von der Pflanzenart ab, deren Nektar gesammelt
              wurde – jeder Honig ist einzigartig.
            </li>
            <li>
              Blütenhonige stammen aus Blütennektar, während Waldhonige aus dem
              Honigtau von Blattläusen oder anderen Insekten gewonnen werden.
            </li>
            <li>
              Sortenhonig (z. B. Lindenhonig, Rapshonig) darf nur so heißen,
              wenn der überwiegende Teil aus einer bestimmten Tracht stammt.
            </li>
            <li>
              Rapshonig kristallisiert besonders schnell und fein, während
              Akazienhonig sehr lange flüssig bleibt.
            </li>
          </ol>
        </section>

        <section className="wissen-block">
          <h2>Gesundheit und Inhaltsstoffe</h2>
          <ol start="11">
            <li>
              Honig enthält rund 200 verschiedene Inhaltsstoffe – darunter
              Enzyme, Aminosäuren, Mineralstoffe, Vitamine und Antioxidantien.
            </li>
            <li>
              Die Enzyme im Honig stammen aus den Speicheldrüsen der Bienen und
              machen ihn zu einem biologisch aktiven Produkt.
            </li>
            <li>
              Honig wirkt leicht antibakteriell, entzündungshemmend und kann bei
              Halsschmerzen und Husten lindernd wirken.
            </li>
            <li>
              Echter Honig ist ein Naturprodukt – er enthält keine
              Konservierungsstoffe oder Zusatzstoffe.
            </li>
            <li>
              Rohhonig (nicht erhitzt) behält alle Enzyme und Nährstoffe. Wird
              Honig über 40 °C erwärmt, gehen viele dieser Stoffe verloren.
            </li>
          </ol>
        </section>

        <section className="wissen-block">
          <h2>Lagerung, Verwendung und Nachhaltigkeit</h2>
          <ol start="16">
            <li>
              Honig sollte kühl, trocken und lichtgeschützt gelagert werden –
              ideal sind Temperaturen zwischen 10 und 18 °C.
            </li>
            <li>
              Honig zieht Feuchtigkeit an (hygroskopisch) – daher immer gut
              verschließen.
            </li>
            <li>
              Wenn Honig kristallisiert, ist das kein Qualitätsmangel – durch
              Erwärmen im Wasserbad (max. 40 °C) wird er wieder flüssig.
            </li>
            <li>
              Honig eignet sich nicht nur zum Süßen, sondern auch zum Kochen und
              Backen. Besonders aromatisch in Dressings und Marinaden!
            </li>
            <li>
              Regionaler Honig unterstützt lokale Imkereien, kurze Transportwege
              und nachhaltige Bestäubung in der Region.
            </li>
          </ol>
        </section>
      </div>
    </HauptLayout>
  );
}
