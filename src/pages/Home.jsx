import NewsCard from "../components/NewsCard";

export default function Home() {

  const myName = 'Khateeb ur rahman'
  const taskDeadline = 'next week'

  return (
    <>
     <div>
      <h2>Welcome to MyApp!</h2>
      <p>This is the public home page.</p>
      <p>This is the public home page tp
      oo.</p>
    </div>

    <NewsCard name={myName} deadline={taskDeadline} />
    </>
   
  );
}
