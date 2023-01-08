import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Miembros del equipo
        </h1>
        <br/>
        <h2 className="text-base font-bold text-indigo-600">
        Somos un grupo de programadores dedicados que disfrutan trabajar en equipo. Durante esta experiencia aprendimos mucho sobre programación , sobre comunicación y trabajo conjunto.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src=""
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">nombre</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src=''
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">nombre</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src=""
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">nombre</p>
            <p className="text-base text-gray-400 font-normal">Full-Stack Developer</p>
            <div className={styles.icons}>
                  <a href='' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src=""
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">nombre</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src=""
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">Mauro Sergio Damian Ferrera</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='https://www.linkedin.com/in/damian-f/' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='https://github.com/damianf2022' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src=""
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">nombre</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src=""
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">nombre</p>
            <p className="text-base text-gray-400 font-normal">Full-Stack Developer</p>
            <div className={styles.icons}>
                  <a href='' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
