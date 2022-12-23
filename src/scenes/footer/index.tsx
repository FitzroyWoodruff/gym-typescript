import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto
            assumenda quasi pariatur quae rem maiores repellendus, incidunt,
            officia consectetur atque eum molestias facere. Voluptates labore ab
            rerum optio a!
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">assumenda quasi pariatur quae rem</p>
          <p className="my-5">officia consectetur atque</p>
          <p className="my-5">Lorem ipsum dolor sit</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">1975 Lost Rd, Myster City, Florida, 32995</p>
          <p className="my-5">(407)-867-5309</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
