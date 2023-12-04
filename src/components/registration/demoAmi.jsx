import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);

    const links = [
        { name: "Home", to: "#", id: 1 },
        { name: "About", to: "#", id: 2 },
        { name: "Blog", to: "#", id: 3 },
        { name: "Contact", to: "#", id: 4 }
    ];

  return (
    <motion.aside 
  initial={{ width: 0 }} 
  animate={{ width: 300 }}
> 
  <div className="container">
    <div>fdsfrwfs</div>
    {links.map(({ name, to, id }) => (
      <a key={id} href={to}>
        {name}
      </a>
    ))}
  </div>
</motion.aside>
  );
}
