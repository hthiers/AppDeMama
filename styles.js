import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE93C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
  },
  icon: {
    marginLeft: 10,
  },
  lastNumberContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  lastNumberTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lastNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
