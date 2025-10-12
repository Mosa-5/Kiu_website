import { YouthUniCard } from "@/assets";
import {
  container,
  contentWrapper,
  imageWrapper,
  image,
  paragraph,
  clearFloat,
} from "./YouthUniDetail.styles";

const YouthUniDetail = () => {
  const textContent = `Kutaisi International University (KIU) Launches Youth University

Kutaisi International University (KIU) has launched a new initiative – the Youth University, a project designed for students in grades 9 to 12 from the Imereti, Guria and Samegrelo-Zemo Svaneti regions. The program includes a series of public lectures on various educational topics, delivered by KIU professors and invited lecturers.

The aim of the Youth University is to increase young people's access to non-formal education, spark curiosity and a love of learning, and introduce them to university life from an early age. The program also supports the development of critical thinking, creativity, and social skills, while helping students broaden their career horizons and make informed choices about their future professions. The Youth University provides students with a unique opportunity to gain experience on the path to integrating into university life.

Due to high interest and demand, the project is gradually being made accessible to students from other regions as well.`;

  const paragraphs = textContent.split("\n\n").filter((p) => p.trim());

  return (
    <div className={container()}>
      <div className={contentWrapper()}>
        <div className={contentWrapper()}>
          <div className={imageWrapper()}>
            <img
              src={YouthUniCard}
              alt="Event ceremony with participants"
              className={image()}
            />
          </div>
          <div>
            <h1 className="font-semibold text-2xl pb-6 text-mainDark">
              About the program
            </h1>
            {paragraphs.map((text, index) => (
              <p key={index} className={paragraph()}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className={clearFloat()}></div>
      </div>
    </div>
  );
};

export default YouthUniDetail;
