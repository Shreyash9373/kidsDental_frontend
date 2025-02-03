import { useEffect } from "react";
import gsap from "gsap";

const Giraffecursor = () => {
  useEffect(() => {
    const giraffe = document.getElementById("giraffe");

    document.addEventListener("mousemove", (e) => {
      gsap.to(giraffe, { x: e.clientX - 50, y: e.clientY - 50, duration: 0.2 });
    });
  }, []);

  return (
    <img
      id="giraffe"
      src="/giraffe.jpg" // Replace with the correct path to your image
      alt="Giraffe"
      className="fixed top-0 left-0 w-20 h-20 pointer-events-none"
    />
  );
};

export default Giraffecursor;
