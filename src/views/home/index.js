/* @flow */
import * as React from "react";
import Input from "../../components/input";
import { SearchBar } from "./style";
import Card from "../../components/card";
import { withApollo } from "react-apollo";
import compose from "recompose/compose";
import { getTournamentQuery } from "../../apiUtils";

type Props = {
  data: *,
  client: *
};

type State = {
  tournyId: string,
  tourny: *
};

class Home extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      tournyId: "",
      tourny: {}
    };
  }

  changeTournyId = (e: *) => {
    this.setState({
      tournyId: e.target.value
    });
  };

  render() {
    const { tournyId, tourny } = this.state;
    return (
      <div>
        <SearchBar>
          <Input
            label={"Paste a tournament or league id to get results."}
            type="text"
            placeholder="Paste a tournament or league id..."
            withButton={true}
            value={tournyId}
            onChange={this.changeTournyId}
            onButton={() =>
              this.props.client
                .query({
                  query: getTournamentQuery,
                  variables: {
                    input: {
                      tournyId: this.state.tournyId
                    }
                  }
                })
                .then((data: *) =>
                  this.setState({ tourny: data.data.getTournament })
                )
            }
            buttonLabel={"Go"}
          />
          {tourny.id && <Card tourny={tourny} />}
          {tourny.id && (
            <div style={{ textAlign: "center", width: "100%" }}>
              <a href={`/league/${this.state.tournyId}`}>Direct Link</a>
            </div>
          )}
        </SearchBar>
      </div>
    );
  }
}

export default compose(withApollo)(Home);
