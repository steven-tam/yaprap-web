import React from 'react';

function Citations() {
  const citations = [
    "Mikics, David (2007). A New Handbook of Literary Terms. New Haven: Yale University Press. pp. 6. ISBN 9780300106367.",
    "Collins, Hilary (2017). Creative Research: The Theory and Practice of Research for the Creative Industries. Laussane: AVA Publishing SA. p. 30. ISBN 9782940411085.",
    "Bundy, Wayne (2002). Innovation, Creativity, and Discovery in Modern Organizations. Westport, CT: Quorum Books. p. 91. ISBN 978-1567205695.",
    "Improvisation | Define Improvisation at Dictionary.com.",
    "Yorton, Tom. \"The art of improv: How to make decisions without a script\". Archived from the original on July 6, 2008.",
    "\"More On Idea Generation Tools and Techniques. IdeaFlow: Discussion about innovation and creativity - new products, strategy, open innovation, commercialization of technologies...\" Archived from the original on 2014-02-24. Retrieved 2007-06-20.",
    "\"Idea Generation, Creativity and Incentives\" (PDF). Mitsloan.mit.edu. Archived from the original (PDF) on 2013-05-20. Retrieved 2013-08-25.",
    "Boral, Sumanta (2016). Ace the PMI-ACP exam: a quick reference guide for the busy professional. New York: Apress. p. 225. doi:10.1007/978-1-4842-2526-4. ISBN 9781484225257. OCLC 967511997. S2CID 27902062.",
    "\"Group creativity techniques to collect requirements\". projectmanagement.com. 13 July 2012. Archived from the original on 30 March 2017. Retrieved 15 April 2017.",
    "\"How To Waste Time Properly - Issue 7: Waste - Nautilus\". Nautilus. 2013-11-14. Archived from the original on 2016-10-03. Retrieved 2016-09-30.",
    "Baird, Benjamin; Smallwood, Jonathan; Mrazek, Michael D.; Kam, Julia W. Y.; Franklin, Michael S.; Schooler, Jonathan W. (1 October 2012). \"Inspired by Distraction: Mind Wandering Facilitates Creative Incubation\". Psychological Science. 23 (10): 1117–1122. doi:10.1177/0956797612446024. ISSN 0956-7976. PMID 22941876. S2CID 46281941.",
    "Mehta, Ravi; Zhu, Rui (Juliet); Cheema, Amar (2012). \"Is Noise Always Bad? Exploring the Effects of Ambient Noise on Creative Cognition\". Journal of Consumer Research. 39 (4): 784–799. doi:10.1086/665048. JSTOR 10.1086/665048.",
    "Oppezzo, Marily; Schwartz, Daniel L. (2014). \"Give your ideas some legs: The positive effect of walking on creative thinking\". Journal of Experimental Psychology: Learning, Memory, and Cognition. 40 (4): 1142–1152. doi:10.1037/a0036577. PMID 24749966. S2CID 11962777.",
    "\"Sleep without Sleeping « Almost Bohemian\". almostbohemian.com. Archived from the original on 2011-05-13.",
    "\"Geeks Take Their Cue from Thomas Edison's Napping Technique\". Wired. 2008-05-19.",
    "Ding, Xiaoqian; Tang, Yi-Yuan (2014). \"Improving creativity performance by short-term meditation\". Behavioral and Brain Functions. 10 (9): 9. doi:10.1186/1744-9081-10-9. PMC 3994657. PMID 24645871.",
    "Ding, Xiaoqian; Tang, Yi-Yuan (2015). \"Short-term meditation modulates brain activity of insight evoked with solution cue\". Social Cognitive and Affective Neuroscience. 10 (1): 43–49. doi:10.1093/scan/nsu032. PMC 4994853. PMID 24532700."
  ];

  return (
    <div className="mt-4 flex flex-col items-center">
      <details className='text-center'>
        <summary className="text-3xl hover:underline font-semibold cursor-pointer text-gray-300">View Citations</summary>
        <div className="mt-4 text-start p-10">
          <ul className="list-disc pl-5 text-gray-500">
            {citations.map((citation, index) => (
              <li key={index}>{citation}</li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
}

export default Citations;
