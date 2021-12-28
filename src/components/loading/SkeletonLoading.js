const SkeletonLoading = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__wrapper">
        <div className="skeleton__text">
          <div className="skeleton__shiner"></div>
        </div>
        <div className="skeleton__text">
          <div className="skeleton__shiner"></div>
        </div>
      </div>
      <div className="skeleton__title">
        <div className="skeleton__shiner"></div>
      </div>
      <div className="skeleton__wrapper">
        <div className="skeleton__labels">
          <div className="skeleton__shiner"></div>
        </div>
        <div className="skeleton__labels">
          <div className="skeleton__shiner"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
