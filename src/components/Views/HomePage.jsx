
const styles = {
  container: {
    minHaight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlight: 'center',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
       
      <h1 style={styles.tiltle}>Home Page</h1>
    </div>
  );
};

export default HomePage;
