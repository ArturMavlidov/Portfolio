import React, { memo } from "react";

import AboutContent from "../AboutContent";
import SkillBlock from "../SkillBlock";

import styles from "./index.module.scss";
import { ReactComponent as SkillsIcon } from "../../../../assets/img/skills-icon.svg";
import { ReactComponent as HtmlIcon } from "../../../../assets/img/html-icon.svg";
import { ReactComponent as JsIcon } from "../../../../assets/img/js-icon.svg";
import { ReactComponent as ReduxIcon } from "../../../../assets/img/redux-icon.svg";
import { ReactComponent as SassIcon } from "../../../../assets/img/sass-icon.svg";
import { ReactComponent as ReactIcon } from "../../../../assets/img/react-icon.svg";
import { ReactComponent as TsIcon } from "../../../../assets/img/ts-icon.svg";

const SkillsItem = memo(() => {

  return (
    <AboutContent icon={<SkillsIcon />}>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsItem}>
          <SkillBlock percent="85" Icon={HtmlIcon} strokeColor="#F16529" dataAnimate="animate_1">
            Отличное знание HTMl5 позволяет строить правильный и валидный каркас
          </SkillBlock>
          <SkillBlock percent="85" Icon={SassIcon} strokeColor="#CB6699" dataAnimate="animate_2">
            Знание препроцессора для CSS позволяет описывать стили структурированно и быстро
          </SkillBlock>
          <SkillBlock percent="75" Icon={JsIcon} strokeColor="#F7E017" dataAnimate="animate_3">
            Хорошее знание JS позволяет придать интерактивности веб-страницам
          </SkillBlock>
          <SkillBlock percent="75" Icon={ReactIcon} strokeColor="#53C1DE" dataAnimate="animate_4">
            Знание библиотеки React позволяет стандантизировать код, легко синхронизовать UI и состояние
          </SkillBlock>
          <SkillBlock percent="75" Icon={ReduxIcon} strokeColor="#6C4EB0" dataAnimate="animate_5">
            Знание Redux позволяет легче масштабировать приложение и управлять его состоянием
          </SkillBlock>
          <SkillBlock percent="65" Icon={TsIcon} strokeColor="#1677C7" dataAnimate="animate_6">
            Знание TypeScript позволяет писать более надёжный и легче обслуживаемый код
          </SkillBlock>
        </div>
      </div>
    </AboutContent>
  );
});

export default SkillsItem;
