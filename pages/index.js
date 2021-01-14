import { Anchor, Box, Button, Heading, Image, Paragraph, Text, Form, FormField, TextInput, MaskedInput, CheckBox, Select } from 'grommet';
import { useState, useCallback } from 'react';
import Feature from '@components/Feature';
import Layout from '@layouts/default';

const content = {
  announcement: {
    text: "testing imminent - stickers for all ❤️",
    link: "#contact"
  },
  heading: <>Backend is now<br/>rocket-powered!</>,
  description: [
    "Deploy production-ready app services to AWS. Launch a full-spec solution or customize to your needs.",
    "Optimized by experts for cost-effective scaling and security.",
  ],
  callToAction:  {
    text: "Sign up to join testing",
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
        buttonTitle: 'Community',
        articleTitle: 'We are International',
        articleBody: 'We have reached over 100 coutries with our platform with over 1 million users enjoying this'
      },
      {
        buttonTitle: 'Curiosity',
        articleTitle: 'We are fast and reliable',
        articleBody: 'We have reached over 100 coutries with our platform with over 1 million users enjoying this'
      },
      {
        buttonTitle: 'velocity',
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
        body: 'Deploy and manage your projects through our simple interface. Access your services and start developing rich user experiences. Work across more than one AWS account and capitalise on free tier or support your clients.',
        readMore: "https://aws.amazon.com/free/",
        reverse: true
      },
      {
        image: '/powered-by-aws.png',
        title: 'AWS Integration',
        body: 'Databases, Servers, File Storage, Email Services and Domain Management. All under one roof means all under one bill. Utilise free tier services and spot instancing to decimate costs. ',
        readMore: "https://aws.amazon.com/ec2/spot/",
        reverse: false
      },
      {
        image: 'https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png',
        title: 'Container Deployment',
        body: 'Reliable and stateless code enables fault-tolerant scaling so you always meet demand. Deploy an image of your choice and manage environment variables for total control.',
        readMore: "https://www.docker.com/",
        reverse: true
      },
      {
        image: 'https://strapi.io/assets/strapi-logo-dark.svg',
        title: 'Utilising Strapi',
        body: "Manage users and build content with the world's most popular open-source CMS. Auto-connected to your AWS services. Supported by a huge community, we love Strapi and think you will to.",
        readMore: "https://strapi.io/",
        reverse: false
      }
    ]
  },
  contact: {
    heading: <>Stay in the loop.</>,
    description: <>
      Hey you, thanks for <i>sticking</i> around 💝<br/><br />We're building a small testing community and would love you to be a part of it. Earn an exclusive sticker for helping.
    </>
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

export default function Home(props) {
  const [formValue, setFormValue] = useState({ subscribe: true })
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
    <Layout title={'Astraios'} announcement={content.announcement} description={content.description[0]}>
      {/* HERO SECTION */}
      <Box round margin={{ top: 'small', horizontal: 'small', bottom: 'large' }} id={'home'}> 
        <Heading size={'large'} margin={{ bottom: "medium" }} responsive>{content.heading}</Heading>
        <Box direction={'row'} align={'end'} wrap>
          <Box flex={'grow'} margin={{ vertical: "small", horizontal: "none" }}>
            {content.description.map((line, key) =><Paragraph key={key} size={'large'} margin={{ vertical: 'small', horizontal: 'none' }} responsive>{line}</Paragraph>)}
            <Box direction={'row-responsive'} gap={'small'} align={"center"} margin={{ vertical: "large" }}>
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
              <TextInput name="name" placeholder="John Doe" />
            </FormField>
            <FormField label="Email" name="email" required>
              <MaskedInput
                name="email"
                mask={[
                  { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                  { fixed: '@' },
                  { regexp: /^[\w]+$/, placeholder: 'mail' },
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
                placeholder="Select..."
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