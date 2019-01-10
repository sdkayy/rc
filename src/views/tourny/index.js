/* @flow */
import * as React from "react";
import Card from "../../components/card";
import compose from "recompose/compose";
import { getTournament } from "../../apiUtils";
import Loading from "../../components/loading";

type Props = {
  data: *
};

class Home extends React.Component<Props> {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <Loading />;
    }
    console.log(data);
    return (
      <div>
        <div>
          {data.getTournament.id && <Card tourny={data.getTournament} />}
        </div>
      </div>
    );
  }
}

export default compose(getTournament)(Home);
