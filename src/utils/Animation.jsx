
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


export const animationWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
          trigger: target,
          toggleActions: 'restart reverse restart reverse',
          start: 'top 85%',
          ...scrollProps,
        }
    })
}






export const animateWithGsapTimeline = (timeline, rotationRef, rotationState,
    firstTarget, secundTarget, anmationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })
    timeline.to(firstTarget, {
        ...anmationProps,
        ease: 'power2.inOut'
    }, '<')
    timeline.to(secundTarget, {
        ...anmationProps,
        ease: 'power2.inOut'
    }, '<')
}