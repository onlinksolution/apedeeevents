import Story from "../components/Story"
import Team from "../components/Team"

const page = () => {
  return (
    <section>
      <div className="about_hero flex flex-col justify-center items-center">
        <h2 className="text-white font-600 text-5xl lg:text-7xl">About Us</h2>
        <p className="text-slate-300 text-sm">Few Details About Us</p>
      </div>

      <Story />
      <Team />
    </section>
  )
}

export default page