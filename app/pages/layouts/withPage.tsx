import * as React from "react";
import Navigation from "../components/Navigation";

function withPageBase<T>(WrappedComponent: React.ComponentType<T>) {
  const EnhacedCompomnent = (props: T) => {
    return (
      <>
        <Navigation />
        <WrappedComponent {...(props as T)} />;
      </>
    );
  };

  WrappedComponent.displayName = `withPageBase(${WrappedComponent.displayName})`;

  return EnhacedCompomnent;
}

export default withPageBase;
