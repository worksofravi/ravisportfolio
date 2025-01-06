import VantaBackground from "@/components/VantaBackground";

export default function Home() {

  return (
    <div>
      <div className="" style={{ position: 'relative', zIndex: 1, textAlign: 'center', minHeight: "100vh" }}>
        <VantaBackground />
        <span style={{ position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)" }}>
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my projects and experience</p>
        </span>
      </div>
    </div>
  );
}
