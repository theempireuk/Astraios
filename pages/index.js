import { Anchor, Box, Button, Heading, Image, Paragraph, Text, Form, FormField, TextInput, MaskedInput, CheckBox } from 'grommet';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Feature } from '../components/Feature/Feature';
import Layout from '../components/Layout'

const content = {
  heading: "A self-hosted cloud services manager.",
  description: <>Automated architecture for extraordinary applications.<br />Built Secure, Scalable and Cost-Effective on AWS.</>,
  callToAction:  {
    text: "Sign up for beta access",
    link: "#contact"
  },
  callToAction2:  {
    text: "Learn more",
    link: "#features",
    description: "All the informtaion you need to get started."
  },
  blog: {
    heading: "Blog Posts",
    description: "Take a moment to learn about us and our product.",
    articles: [
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
  },
  features: {
    heading: "Features",
    description: "Built to save you time and money.",
    features: [
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
  },
  contact: {
    heading: "Sign up for beta access",
    description: <>Launching 2021.<br />Stay in the loop with email updates.</>
  }
}

export default function Home() {
  const [index, setIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  // const handleSubmit = (form, e) => {
  //   e.preventDefault()
  //   let formData = new FormData(form)
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString()
  //   }).then(() => setSubmitted(true)).catch((error) => alert(error))
  // }
  useEffect(() => Array.from(document.getElementsByTagName('form')).forEach(form => {
    // form.setAttribute("name", "Astraios Beta Signup")
    // form.setAttribute("form-name", "Astraios Beta Signup")
    // form.setAttribute("data-netlify", true)
    // form.addEventListener("submit", (e) => handleSubmit(form, e))
    form.addEventListener("submit", (e) => setSubmitted(true))
  }), [])
  return (
    <Layout>
      <Box round margin={'large'} pad={{ bottom: "large" }} id={'home'}> 
        <Heading size={'large'} responsive>{content.heading}</Heading>
        <Paragraph size={'large'} responsive>{content.description}</Paragraph>
        <Box direction={'row-responsive'} gap={'small'} align={"center"} margin={{ top: "medium", bottom: "medium" }}>
          <Anchor href={content.callToAction.link}><Button primary size={"large"} label={content.callToAction.text}/></Anchor>
        </Box>
        <Box direction={'row-responsive'} wrap gap={'small'} align={"center"}>
          <Anchor label={content.callToAction2.text} href={content.callToAction2.link} size={"medium"} color={'#7D4CDB'}/>
          <Text size={"medium"}>{content.callToAction2.description}</Text>
        </Box>
      </Box>
      <Box round margin={'large'} pad={{ top: "large", bottom: "large" }} id={'blog'}>
        <Heading size={'medium'} margin={'none'} responsive>{content.blog.heading}</Heading>
        <Paragraph size={'small'} responsive>{content.blog.description}</Paragraph>
        <Box direction={'column'} gap={'medium'} pad={"medium"} round background={'dark-1'}>
        <Box direction={'row'} gap={'small'} align={"center"} justify={"center"}>
          <Box direction={"row-responsive"} gap={'small'} align={"center"} justify={"center"} style={{minWidth: '250px'}}>
            {content.blog.articles.map(({buttonTitle}, key) => 
              <Button primary size={"small"} label={buttonTitle} key={key} disabled={ index === key } onClick={() => setIndex(key)}/>
            )}
          </Box>
        </Box>
          <Box direction={"row-responsive"} gap={'medium'}>
            <Box align={"center"} justify={'center'}>
              <Image src={'/spaceship.png'} style={{borderRadius: '20px', maxWidth: '200px'}}/>
            </Box> 
            <Box flex={'grow'} direction={'column'} align={"center"}>
              <Heading level={'2'} margin={'none'}>{content.blog.articles[index].articleTitle}</Heading>
              <Paragraph size={'small'} responsive>{content.blog.articles[index].articleBody}</Paragraph>
              <Box>
                <Anchor label={'Read more'} size={'small'} color={'#7D4CDB'}/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction={'column'} align={'center'} margin={'medium'} pad={{ top: "large", bottom: "large" }} id={'features'}>
        <Heading size={'medium'} margin={'none'} responsive>{content.features.heading}</Heading>
        <Paragraph size={'small'} responsive>{content.features.description}</Paragraph>
        {content.features.features.map(({title, body, reverse}, key) => 
          <Feature title={title} body={body} key={key} reverse={reverse}/>
        )}
        <Box direction={'row-responsive'} responsive wrap gap={'small'} align={"center"} margin={'large'}>
          <Anchor href={content.callToAction.link}><Button primary size={"large"} label={content.callToAction.text}/></Anchor>
        </Box>
      </Box>
      <Box direction={'column'} align={'center'} margin={'medium'} pad={{ top: "large", bottom: "large" }} id={'contact'}>
        <Heading size={'medium'} margin={'none'} responsive>{content.contact.heading}</Heading>
        <Paragraph size={'small'} textAlign={'center'} responsive>{content.contact.description}</Paragraph>
        <Box align={"center"} margin={'large'} background={'dark-1'} round pad={'large'}>
          <Form name="Astraios Beta Signup" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="Astraios Beta Signup" />
            <FormField label="Name" name="name">
              <TextInput name="name" />
            </FormField>
            <FormField label="Email" name="email" required>
              <MaskedInput
                name="email"
                mask={[
                  { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                  { fixed: '@' },
                  { regexp: /^[\w]+$/, placeholder: 'my' },
                  { fixed: '.' },
                  { regexp: /^[\w.]+$/, placeholder: 'com' },
                ]}
              />
            </FormField>
            <FormField name="subscribe">
              <CheckBox name="subscribe" label="Subscribe for email updates?" />
            </FormField>
            <Box direction="row" justify="center" margin={{ top: 'large' }}>
              <Button type="submit" disabled={submitted} label={submitted ? "Thanks 🎉" : "Submit"} primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Layout>
  )
}
