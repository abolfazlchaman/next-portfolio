import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Navigation
        dictionary={dictionary.navigation}
        fullName={dictionary.developerInfo.fullName}
        theme={dictionary.theme}
      />
      <Hero dictionary={dictionary} />
    </div>
  );
}
