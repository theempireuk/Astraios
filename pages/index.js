import { Anchor, Box, Button, Heading, Image, Paragraph, Text } from 'grommet';
import { useState } from 'react';
import styled from 'styled-components';
import { Feature } from '../components/Feature/Feature';
import Layout from '../components/Layout'

const articles = [
  {
    buttonTitle: 'Article 1',
    articleTitle: 'We are International',
    articleBody: 'We have reached over 100 coutries with our platform with over 1 million users enjoying this'
  },
  {
    buttonTitle: 'Article 2',
    articleTitle: 'We are fast and reliable',
    articleBody: 'We have reached over 100 coutries with our platform with over 1 million users enjoying this'
  },
  {
    buttonTitle: 'Article 3',
    articleTitle: 'We jus hit 1 million active users',
    articleBody: 'We have reached over 100 coutries with our platform with over 1 million users enjoying this'
  }
]

const features = [
  {
    title: 'this is the title for first',
    body: 'this is the main bit of the feature and you will love it so much as million of users are using it.',
    reverse: false
  },
  {
    title: 'this is the title for second',
    body: 'this is the main bit of the feature and i guarantee you that its amazing and its famous.',
    reverse: true
  },
  {
    title: 'this is the title for last',
    body: 'this is the main bit of the feature and please buy this and i dont have anymore words.',
    reverse: false
  }
]

export default function Home() {
  const [index, setIndex] = useState(0);
  return (
    <Layout>
      <Box round pad={'medium'} id={'home'}> 
        <Heading size={'large'} responsive>This is an Awesome Product that you should totally buy</Heading>
        <Paragraph size={'large'} responsive>More sales copy that is going to convince you with a bit more detail</Paragraph>
        <Box direction={'row-responsive'} gap={'small'} align={"center"}>
          <Button primary size={"medium"} label={"Launch Project"}/>
          <Text size={"medium"}>Start your first project today!</Text>
        </Box>
        <Box direction={'row-responsive'} wrap gap={'small'} align={"center"} margin={{top: 'small'}}>
          <Anchor label={'Learn more'} size={"small"} color={'#7D4CDB'}/>
          <Text size={"small"}>All the information you need to get started.</Text>
        </Box>
      </Box>
      <Box round margin={{top: 'medium'}} pad={'medium'} id={'blog'}>
        <Heading size={'medium'} margin={'none'} responsive>Blog Posts</Heading>
        <Paragraph size={'small'} responsive>Hear how our platform is doing!</Paragraph>
        <Box direction={'column'} gap={'medium'} pad={"medium"} round style={{backgroundColor: '#F8F8F8'}}>
        <Box direction={'row'} gap={'small'} align={"center"} justify={"center"}>
          <Box direction={"row-responsive"} gap={'small'} align={"center"} justify={"center"} style={{minWidth: '250px'}}>
            {articles.map(({buttonTitle}, key) => 
              <Button primary size={"xsmall"} label={buttonTitle} key={key} disabled={ index === key } onClick={() => setIndex(key)}/>
            )}
          </Box>
        </Box>
          <Box direction={"row-responsive"} gap={'medium'}>
            <Box align={"center"} justify={'center'}>
              <Image src={'/spaceship.png'} style={{borderRadius: '20px', maxWidth: '200px'}}/>
            </Box> 
            <Box flex={'2'} direction={'column'} align={"center"}>
              <Heading level={'2'} margin={'none'}>{articles[index].articleTitle}</Heading>
              <Paragraph size={'small'} responsive>{articles[index].articleBody}</Paragraph>
              <Box>
                <Anchor label={'Read more'} size={'small'} color={'#7D4CDB'}/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction={'column'} align={'center'} margin={{top: 'medium'}} id={'feature'}>
        <Heading size={'medium'} margin={'none'} responsive>Features</Heading>
        <Paragraph size={'small'} responsive>Some of our amazing work!</Paragraph>
        {features.map(({title, body, reverse}, key) => 
          <Feature title={title} body={body} key={key} reverse={reverse}/>
        )}
        <Box direction={'row-responsive'} responsive wrap gap={'small'} align={"center"}>
          <Button primary size={"medium"} label={"Launch Project"}/>
          <Text size={"medium"}>Start your first project today!</Text>
        </Box>
      </Box>
    </Layout>
  )
}
