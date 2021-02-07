import styled from 'styled-components';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno no usestate', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>ZehBatalhaQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            {/* <h1>{db.title}</h1> */}
            Quiz do Zé Batalha
          </Widget.Header>
          <Widget.Content>
            {/* <p>{db.description}</p> */}
            {/* o onSubmit é coisa do react */}
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push('/quiz?name=${name}');
              console.log('fazendo submit');

              // router manda para a próxima página
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  // name = infosDoEvento.target.value;
                  // console.log(name);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz aí seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/___" />
    </QuizBackground>
  );
}
