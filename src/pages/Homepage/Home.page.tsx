import React from 'react';
import Layout from '../../components/Layout/Layout';
import ProjectCardsList from '../../business-logic/ProjectsCardsList/ProjectCardsList';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <ProjectCardsList />
    </Layout>
  );
}

export default HomePage;
