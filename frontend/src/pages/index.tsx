import PageTitle from 'ui/components/data-display/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment';

export default function Home() {
  return (
    <div className="container">
      <main>
        <SafeEnvironment />
        <PageTitle
          title="Conheça os profissionais"
          subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
        />

        <UserInformation
          name="Gabriel"
          picture="https://github.com/gabriel-nt.png"
          rating={3}
          description="Rio Grande do Sul"
        />
      </main>
    </div>
  );
}
