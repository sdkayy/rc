/* @flow */
import * as React from "react";
import moment from "moment";
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardHeaderText,
  CardHeaderDate,
  CardBodyOpts,
  ListItemDate,
  TeamEntry,
  TeamName,
  TeamScore,
  ListContainer,
  ListItem,
  SortingButton,
  ButtonInners,
  ButtonText,
  Flipper
} from "./style";
import Icon from "../icons";
type Props = {
  tourny: *
};

type State = {
  // true == ASC | false == DESC
  sorting: boolean
};

class Card extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      sorting: false
    };
  }

  render() {
    const { tourny } = this.props;
    return (
      <CardContainer>
        <CardHeader>
          <CardHeaderText>{tourny.name}</CardHeaderText>
          <CardHeaderDate>{moment(tourny.date).format("l")}</CardHeaderDate>
        </CardHeader>
        <CardBody>
          <CardBodyOpts>
            <SortingButton
              onClick={() =>
                this.setState({
                  sorting: !this.state.sorting
                })
              }
            >
              <ButtonInners>
                <ButtonText>Date</ButtonText>
                <Flipper sorting={this.state.sorting}>
                  <Icon icon={"caret"} size={11} />
                </Flipper>
              </ButtonInners>
            </SortingButton>
          </CardBodyOpts>
          <ListContainer>
            {tourny.matches
              .sort((a, b) => {
                const { sorting } = this.state;
                const aM = +new Date(a.beginAt);
                const bM = +new Date(b.beginAt);
                if (aM > bM) {
                  return sorting ? 1 : -1;
                } else if (aM < bM) {
                  return sorting ? -1 : 1;
                } else {
                  return 0;
                }
              })
              .map(mtch => (
                <ListItem>
                  <ListItemDate>
                    {moment(mtch.beginAt).format("LT")}
                  </ListItemDate>
                  <TeamEntry>
                    <TeamName
                      winner={mtch.team_one_score > mtch.team_two_score}
                    >
                      {mtch.team_one}
                    </TeamName>
                    <TeamScore
                      winner={mtch.team_one_score > mtch.team_two_score}
                    >
                      {mtch.team_one_score}
                    </TeamScore>
                  </TeamEntry>
                  <TeamEntry>
                    <TeamName
                      winner={mtch.team_one_score < mtch.team_two_score}
                    >
                      {mtch.team_two}
                    </TeamName>
                    <TeamScore
                      winner={mtch.team_one_score < mtch.team_two_score}
                    >
                      {mtch.team_two_score}
                    </TeamScore>
                  </TeamEntry>
                </ListItem>
              ))}
          </ListContainer>
        </CardBody>
      </CardContainer>
    );
  }
}

export default Card;
