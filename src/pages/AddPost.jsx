import React from 'react'
import { Container, PostForm } from '../components'
import { motion } from 'framer-motion'

function AddPost() {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className='py-8 page-bg'>
        <Container>
            <div className='max-w-3xl mx-auto mb-6 text-center text-aurora-text'>
                <h1 className='font-serif text-2xl font-semibold text-aurora-text'>Create Your Story</h1>
                <p className='text-aurora-muted text-aurora-text'>Share your thoughts with clarity and creativity.</p>
            </div>
            <PostForm />
        </Container>
    </motion.div>
  )
}

export default AddPost