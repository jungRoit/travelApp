import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  reviewBox: {
    width: '100%',
    flexDirection: 'row',
    paddingRight: 10,
    paddingBottom: 20
  },
  imageBox: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  contentBox: {
    flex: 3
  },
  reviewerDetails: {
    flex: 2
  },
  reviewerName: {
    fontWeight: 'bold'
  },
  rating: {
    color: 'gold'
  },
  reviewText: {
    flex: 5
  },
  timeText: {
    color: '#aea0a0'
  }
});

export default styles;
