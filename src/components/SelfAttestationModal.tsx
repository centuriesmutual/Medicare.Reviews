'use client'

import { useState } from 'react'
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SelfAttestationModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
}

interface Question {
  id: string
  question: string
  type: 'yes-no' | 'multiple-choice'
  options?: string[]
  followUp?: {
    yes?: Question[]
    no?: Question[]
  }
}

const questions: Question[] = [
  {
    id: '1',
    question: 'Do you currently have an active Medicare Health Insurance card?',
    type: 'yes-no',
    followUp: {
      yes: [
        {
          id: '1a',
          question: 'Does your Medicare card show Part A coverage?',
          type: 'yes-no',
          followUp: {
            yes: [
              {
                id: '1a-i',
                question: 'Does your Medicare card show Part B coverage?',
                type: 'yes-no'
              }
            ],
            no: [
              {
                id: '1a-ii',
                question: 'Are you currently enrolled in Medicare Part B?',
                type: 'yes-no'
              }
            ]
          }
        }
      ],
      no: [
        {
          id: '1b',
          question: 'Are you currently enrolled in Medicare Part A?',
          type: 'yes-no',
          followUp: {
            yes: [
              {
                id: '1b-i',
                question: 'Are you currently enrolled in Medicare Part B?',
                type: 'yes-no'
              }
            ],
            no: []
          }
        }
      ]
    }
  }
]

export default function SelfAttestationModal({ isOpen, onClose, onComplete }: SelfAttestationModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [questionPath, setQuestionPath] = useState<Question[]>([questions[0]])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const getCurrentQuestion = (): Question | null => {
    if (questionPath.length === 0) return null
    return questionPath[currentQuestionIndex] || null
  }

  const handleAnswer = (answer: string) => {
    const currentQuestion = getCurrentQuestion()
    if (!currentQuestion) return

    const newAnswers = { ...answers, [currentQuestion.id]: answer }
    setAnswers(newAnswers)

    // Determine next question based on answer
    if (currentQuestion.followUp) {
      const followUpQuestions = answer === 'yes' 
        ? currentQuestion.followUp.yes 
        : currentQuestion.followUp.no

      if (followUpQuestions && followUpQuestions.length > 0) {
        // Add the first follow-up question to the path
        const newPath = [...questionPath, followUpQuestions[0]]
        setQuestionPath(newPath)
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        // No more follow-ups, complete verification
        completeVerification()
      }
    } else {
      // No follow-ups for this question, check if we're at the end
      if (currentQuestionIndex < questionPath.length - 1) {
        // Move to next question in path
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        // We've reached the end, complete verification
        completeVerification()
      }
    }
  }

  const completeVerification = async () => {
    setIsProcessing(true)
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setIsComplete(true)
    
    // Call onComplete after a short delay
    setTimeout(() => {
      onComplete()
      onClose()
      // Reset state
      setCurrentQuestionIndex(0)
      setAnswers({})
      setQuestionPath([questions[0]])
      setIsComplete(false)
    }, 2000)
  }

  const currentQuestion = getCurrentQuestion()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 9998,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{
                backgroundColor: 'var(--nyt-white)',
                borderRadius: '12px',
                padding: '30px',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                zIndex: 9999,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            {!isProcessing && !isComplete && (
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--nyt-bg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <X style={{ width: '20px', height: '20px', color: 'var(--nyt-gray)' }} />
              </button>
            )}

            {/* Content */}
            <div>
              {!isProcessing && !isComplete && (
                <>
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '10px',
                    color: 'var(--nyt-black)',
                    textAlign: 'center'
                  }}>
                    Medicare Eligibility Self-Attestation
                  </h2>
                  
                  <p style={{
                    color: 'var(--nyt-gray)',
                    textAlign: 'center',
                    marginBottom: '30px',
                    fontSize: '0.95rem'
                  }}>
                    Please answer the following questions to verify your Medicare eligibility.
                  </p>

                  {currentQuestion && (
                    <div>
                      <div style={{
                        marginBottom: '25px',
                        padding: '20px',
                        backgroundColor: 'var(--nyt-cream)',
                        borderRadius: '8px',
                        border: '1px solid var(--nyt-border)'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          marginBottom: '15px'
                        }}>
                          <div style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--nyt-accent)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            flexShrink: 0
                          }}>
                            {currentQuestionIndex + 1}
                          </div>
                          <h3 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: 'var(--nyt-black)',
                            margin: 0
                          }}>
                            {currentQuestion.question}
                          </h3>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}>
                        {currentQuestion.type === 'yes-no' ? (
                          <>
                            <button
                              onClick={() => handleAnswer('yes')}
                              className="nyt-button"
                              style={{
                                backgroundColor: 'var(--nyt-accent)',
                                padding: '14px 24px',
                                fontSize: '1rem',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer'
                              }}
                            >
                              <CheckCircle style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                              <span>Yes</span>
                            </button>
                            <button
                              onClick={() => handleAnswer('no')}
                              className="nyt-button"
                              style={{
                                backgroundColor: 'var(--nyt-gray)',
                                padding: '14px 24px',
                                fontSize: '1rem',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer'
                              }}
                            >
                              <AlertCircle style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                              <span>No</span>
                            </button>
                          </>
                        ) : (
                          currentQuestion.options?.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswer(option)}
                              className="nyt-button"
                              style={{
                                backgroundColor: 'var(--nyt-bg)',
                                padding: '14px 24px',
                                fontSize: '1rem',
                                textAlign: 'left',
                                cursor: 'pointer'
                              }}
                            >
                              {option}
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}

              {isProcessing && (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <Loader2 className="animate-spin" style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 20px',
                    color: 'var(--nyt-accent)'
                  }} />
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: 'var(--nyt-black)',
                    marginBottom: '10px'
                  }}>
                    Processing Your Responses
                  </h3>
                  <p style={{ color: 'var(--nyt-gray)' }}>
                    Verifying your Medicare eligibility...
                  </p>
                </div>
              )}

              {isComplete && (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--nyt-accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white'
                  }}>
                    <CheckCircle style={{ width: '40px', height: '40px' }} />
                  </div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: 'var(--nyt-black)',
                    marginBottom: '10px'
                  }}>
                    Verification Complete
                  </h3>
                  <p style={{ color: 'var(--nyt-gray)' }}>
                    Your self-attestation has been submitted successfully.
                  </p>
                </div>
              )}
            </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

