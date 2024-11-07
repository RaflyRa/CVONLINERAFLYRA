
import Hero from "./components/hero";
import PersonalInfo from "./components/personalinfo";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import Skill from "./components/skill";
import "./style";






export default function CVonline() {
  return (
    <section>
      <Hero/>
      <PersonalInfo/>
      <RiwayatPekerjaan/>
      <RiwayatPendidikan/>
      <Skill/>
  
    </section>
  );
}