import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shopSelector';

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2>CATEGORY PAGE</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
