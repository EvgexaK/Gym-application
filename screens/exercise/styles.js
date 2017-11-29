import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 420,
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
    marginRight: 16,
    marginBottom: 5,
    marginLeft: 30,
  },
  imageContainer: {
    padding: 8,
    flex: 1,
  },
  image: {
    width: 234,
    height: 234,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    width: 100,
  },
});

export default styles;
