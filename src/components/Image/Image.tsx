import * as React from "react";
import { connect } from "react-redux";
import { showImages } from "../../store/actions";
import { getImageURL } from "./api";
import { IImage } from "./ImageInterface";


class Image extends React.Component<IImage> {

  public async componentDidMount() {
    const imageURL = await getImageURL();
    const { showImages } = this.props;
    if (showImages) {
      showImages(imageURL);
    }
  }
  public render() {
    const { imageURL } = this.props;
    return (
      <div className="image-div">
        <h3 className="image-title">It's time to do something useful!</h3>
        <img src={imageURL} alt="mem" />
      </div>
    );
  }
}

const mapStateToProps = ({ imageURL }: { imageURL: string }) => ({ imageURL });

export default connect(mapStateToProps, { showImages })(Image);
