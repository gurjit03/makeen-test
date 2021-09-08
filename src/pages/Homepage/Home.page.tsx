import React from 'react';
import Layout from '../../components/Layout/Layout';
import ProjectCardsListContainer from '../../business-logic/ProjectsCardsListContainer/ProjectCardsListContainer';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <ProjectCardsListContainer />
    </Layout>
  );
}

export default HomePage;
