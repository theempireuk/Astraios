import { Anchor, Box, Button, Heading, Image, Paragraph, Text, Form, FormField, TextInput, MaskedInput, CheckBox, Select } from 'grommet';
import { useState, useCallback } from 'react';
import { Feature } from '../components/Feature/Feature';
import Layout from '../components/Layout';

const content = {
  heading: "Your cloud services engineer.",
  description: <>Automatically deploy and manage your own backend systems. Powered by AWS.<br /><br />Optimized by experts for security, scalability and cost-effectiveness.</>,
  callToAction:  {
    text: "Sign up for beta access",
    link: "#contact"
  },
  callToAction2:  {
    text: "Learn more",
    link: "#features",
    description: "All the information you need to get started."
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
        image: '/astraios_ui_icon.png',
        title: 'Service Control Centre',
        body: 'Our hand-built UI lets you effortlessly deploy, monitor and manage your AWS services across multiple projects. Empowering you and your team with rapid backend development that will support your feature-rich user experiences.',
        reverse: true
      },
      {
        image: 'https://d0.awsstatic.com/logos/powered-by-aws.png',
        title: 'AWS Integration',
        body: 'Databases, Servers, File Storage, Email Services and Domain Management, all under one roof. Utilising auto-scaling spot instances to decimate prices. Built to support projects on multiple AWS accounts.',
        reverse: false
      },
      {
        image: 'https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png',
        title: 'Container Deployment',
        body: 'Reliable and stateless deployments enable auto-recovering production services and scalability. Use the default Strapi image to instantly connect all of your services through an API and visual CMS or provide your own image.',
        readMore: "https://www.docker.com/",
        reverse: true
      },
      {
        image: 'https://strapi.io/assets/strapi-logo-dark.svg',
        title: 'Utilising Strapi',
        body: "Manage and interact with your application's users and data through the world's most popular open-source Node.js CMS, Strapi.",
        readMore: "https://strapi.io/",
        reverse: false
      }
    ]
  },
  contact: {
    heading: "Sign up for beta access",
    description: <>Launching 2021.<br />Stay in the loop with email updates.</>
  }
}

const formData = {
  jobOptions: [
    "Software Developer - Agency",
    "Software Developer - Product",
    "Software Developer - Freelance",
    "Product Manager",
    "Project Manager",
    "Business Owner",
    "Hobbyist/Tech-enthusiast"
  ]
}

export default function Home() {
  const [formValue, setFormValue] = useState({
    job: formData.jobOptions[0],
    subscribe: true
  })
  const [submitted, setSubmitted] = useState(false)
  const onChange = useCallback(nextValue => setFormValue(nextValue), [])

  // netlify forms fcns
  const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
  const handleSubmit = async (e) => {
    e.preventDefault()
    let submission = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ ...formValue, "form-name": "Astraios Beta Signup"  })
    })
    if (submission) setSubmitted(true)
  }

  return (
    <Layout>
      {/* HERO SECTION */}
      <Box round margin={{ vertical: 'large', horizontal: 'small' }} pad={{ bottom: "large" }} id={'home'}> 
        <Heading size={'large'} margin={{ bottom: "none" }} responsive>{content.heading}</Heading>
        <Box direction={'row'} align={'end'} wrap>
          <Box flex={'grow'} margin={{ vertical: "2rem", horizontal: "auto" }}>
            <Paragraph size={'large'} responsive>{content.description}</Paragraph>
            <Box direction={'row-responsive'} gap={'small'} align={"center"} margin={{ top: "medium", bottom: "medium" }}>
              <Anchor href={content.callToAction.link}><Button primary size={"large"} label={content.callToAction.text}/></Anchor>
            </Box>
            <Box direction={'row-responsive'} wrap gap={'small'} align={"center"}>
              <Anchor label={content.callToAction2.text} href={content.callToAction2.link} size={"medium"} color={'#7D4CDB'}/>
              <Text size={"medium"}>{content.callToAction2.description}</Text>
            </Box>
          </Box>
          <Box margin={{ vertical: "2rem", horizontal: "auto" }} width={'20rem'} height={'20rem'}>
            <Image
              fit="contain"
              src="/astraios_checklist.png"
            />
          </Box>
        </Box>
      </Box>
      {/* BLOG SECTION */}
      {/* <Box round margin={{ vertical: 'large', horizontal: 'small' }} pad={{ top: "large", bottom: "large" }} id={'blog'}>
        <Heading size={'medium'} margin={'none'} responsive>{content.blog.heading}</Heading>
        <Paragraph size={'small'} responsive>{content.blog.description}</Paragraph>
        <Box direction={'column'} gap={'medium'} pad={"medium"} round background={'light-1'}>
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
      </Box> */}
      {/* FEATURES */}
      <Box direction={'column'} align={'center'} margin={{ vertical: 'large', horizontal: 'small' }} pad={{ top: "large", bottom: "large" }} id={'features'}>
        <Heading textAlign={'center'} size={'medium'} margin={'none'} responsive>{content.features.heading}</Heading>
        <Paragraph size={'small'} responsive>{content.features.description}</Paragraph>
        {content.features.features.map(({image, title, body, readMore, reverse}, key) => 
          <Feature image={image} title={title} body={body} key={key} readMore={readMore} reverse={reverse}/>
        )}
        <Box direction={'row-responsive'} responsive wrap gap={'small'} align={"center"} margin={'large'}>
          <Anchor href={content.callToAction.link}><Button primary size={"large"} label={content.callToAction.text}/></Anchor>
        </Box>
      </Box>
      {/* SIGNUP */}
      <Box direction={'column'} align={'center'} margin={{ vertical: 'large', horizontal: 'small' }} pad={{ top: "large", bottom: "large" }} id={'contact'}>
        <Heading textAlign={'center'} size={'medium'} margin={'none'} responsive>{content.contact.heading}</Heading>
        <Paragraph size={'small'} textAlign={'center'} responsive>{content.contact.description}</Paragraph>
        <Box align={"center"} margin={'large'} background={'light-1'} round pad={'large'}>
          <Form value={formValue} onChange={onChange} onSubmit={handleSubmit} name="Astraios Beta Signup" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            {/* <input type="hidden" name="form-name" value="Astraios Beta Signup" /> */}
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
            <FormField label="Job" name="job">
              <Select
                name="job"
                options={formData.jobOptions}
                value={formValue.job}
              />
            </FormField>
            <FormField name="subscribe">
              <CheckBox name="subscribe" label="Subscribe for email updates?" checked={formValue.subscribe} />
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
