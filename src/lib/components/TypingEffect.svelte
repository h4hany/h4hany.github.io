<script>
    import {onMount} from 'svelte';

    let displayText = '';
    let index = 0;
    // let isTypingFinished = false; // Track if typing is done

    // const content = `hany`;
    const contentArr = [
        'Senior Software Engineer ',
        'Professional Scrum Master (PSM I) ',
        'Full-Stack Developer ',
        'Over 10 years of experience in software development ',
        'Create More than 30 project from idea to production ',
        'Advanced Problem-Solving: Strong analytical skills with experience in tackling complex ' +
        'technical challenges, optimizing code for performance, and finding innovative solutions to ' +
        'real-world problems.',
        'Full-Stack Expertise: Advanced proficiency in backend (Ruby on Rails, Django,.NET Core) and ' +
        'frontend (Angular, React.js, Vue.js) technologies.',
        'Agile Leadership: Certified Scrum Master with hands-on experience running Scrum' +
        'ceremonies, ensuring high productivity, and delivering on business objectives.',
        'Database Optimization: Extensive experience designing, optimizing, and managing' +
        'database architectures using PostgreSQL, MySQL, and MongoDB.',
        'Problem-Solving & Innovation: Strong focus on problem-solving, delivering clean, scalable' +
        'code with a continuous improvement mindset.',
        'Cross-functional Collaboration: Effective communicator, collaborating with stakeholders,' +
        'developers, and other teams to deliver business-critical solutions.',
        'Solve +800 Problem @ Codewars | Hackerrank | Leetcode check my links'
    ];

    let currentContentIndex = 0; // Track which string in the array is being typed
    let isTypingFinished = false; // Track if typing for current content is finished

    const type = () => {
        if (index < contentArr[currentContentIndex].length) {
            displayText += contentArr[currentContentIndex][index];
            index++;
            setTimeout(type, 50); // Call type function recursively for typing effect
        } else {
            isTypingFinished = true; // Mark typing as finished for current string
            // Wait for a bit before starting to type the next string
            setTimeout(() => {
                currentContentIndex = (currentContentIndex + 1) % contentArr.length; // Move to next string, loop back if at the end
                displayText = ''; // Clear the current display text
                index = 0; // Reset the index for the new string
                isTypingFinished = false; // Reset typing flag
                type(); // Start typing the next string
            }, 1000); // 1-second delay before moving to the next string
        }
    };
    // const type = () => {
    // 	contentArr.forEach(content=>{
    //
    // 		if (index < content.length) {
    // 			displayText += content[index];
    // 			index++;
    // 			setTimeout(type, 100); // Call type function recursively for typing effect
    // 		} else {
    // 			isTypingFinished = true; // Set typing finished when done
    // 		}
    //
    // 		index = 0;
    // 		displayText=''
    // 	})
    //
    // };
    type(); // Start typing effect

</script>

<style>
    .typing-effect-container {
        /*background: linear-gradient(135deg, #4facfe, #00f2fe);*/
        color: yellow;
        font-family: 'Courier New', Courier, monospace;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-radius: 10px;
        max-width: 600px;
        /*margin: 2rem auto;*/
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .typing-effect-text {
        font-size: 1.2rem;
        line-height: 1.6;
        white-space: pre-wrap;
    }

    .cursor {
        display: inline-block;
        width: 1ch;
        background-color: #fff;
        animation: blink 0.6s step-end infinite;
    }

    @keyframes blink {
        50% {
            background-color: transparent;
        }
    }

    /* Hide cursor when typing is finished */
    .cursor.hidden {
        animation: none;
    }
</style>

<div class="typing-effect-container">
    <div class="typing-effect-text">
        {displayText}<span class="cursor {isTypingFinished ? 'hidden' : ''}">|</span>
    </div>
</div>
