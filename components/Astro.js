import React, {Component} from 'react';
import web3 from '../ethereum/web3'
import {Modal, Button, Icon, Header, Form, Card, Grid, Input, Message} from 'semantic-ui-react';
import {MetaID} from "./index";

const Astro = ({astro, modalOpen, handleClose, upBid, downBid, onPressBuy, formLoading, message, messageUrl}) => {
  return (
      <Modal
          open={modalOpen}
          onClose={handleClose}
          basic size='small'
      >
        <Header icon='id badge' content='Become an owner of this star.'/>
        <Modal.Content>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <p>
                  {`Do you like star #${astro.target.name} ?`}<br/>
                  {`Buy now and put your identity on constellation using MetaID.`} <a href='https://metadium.com'
                                                                                      target="_blank">(What is
                  MetaID?)</a><br/>
                  {`You can put your name on it.`}
                </p>
                <MetaID
                    metaID={astro.metaID}
                    starImage={`http://server7.sky-map.org/imgcut?survey=DSS2&w=128&h=128&ra=${astro.ra.decimal}&de=${astro.dec.decimal}&angle=1.25&output=PNG`}
                    starUrl={`http://server1.wikisky.org/v2?ra="+(${astro.ra.decimal}/15)+"&de="+(${astro.dec.decimal})+"&zoom=6&img_source=DSS2`}
                    starPrice={web3.utils.fromWei(astro.lastBid, 'ether')}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Card style={styles.formContainer}>
                  <Card.Content>
                    <Form loading={formLoading}>
                      <Form.Field required>
                        <label>Name</label>
                        <Input ref={(ref) => this.name = ref} placeholder='astro' />
                      </Form.Field>
                      <Form.Field required>
                        <label>Social</label>
                        <Input ref={(ref) => this.sns = ref} type='url' placeholder='facebook.com' />
                      </Form.Field>
                    </Form>
                    {message ?
                    <Message color='green'><a href={messageUrl} target={'_blank'}>{message}</a> </Message>
                    : null}
                    <Message color='yellow'>
                      {`Minimum Price : ${web3.utils.fromWei(astro.currentBid, 'ether')} ETH`}<br/><br/>
                      {`Anyone who pays ${web3.utils.fromWei(astro.minBidTic, 'ether')} ETH more than your bid price will be able to purchase this star from you without permission. (You will get your bidded ether back anyway)`}
                      </Message>
                  </Card.Content>
                  <Card.Content extra>
                    <Input ref={(ref) => this.input = ref} defaultValue={web3.utils.fromWei(astro.currentBid, 'ether')}
                           type='number' min={`${web3.utils.fromWei(astro.currentBid, 'ether')}`}
                           step='0.01' placeholder='Your Bid' action
                    >
                      <input />
                      <Button color='green' onClick={() => onPressBuy(this.input.inputRef.value, this.name.inputRef.value, this.sns.inputRef.value)} inverted>
                        {`Buy`}
                      </Button>
                    </Input>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
  )
};

const styles = {
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
};

export {Astro};