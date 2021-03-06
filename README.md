#<b>ContrastMedium algorithm</b>

this the github page to host the source code of ContrastMedium (CM) algorithm:
http://web.informatik.uni-mannheim.de/contrastmedium/

#<b>Description</b>

CM is an algorithm that transforms noisy semantic networks into full-fledged, clean taxonomies. CM is able to identify the embedded taxonomy structure from a noisy knowledge graph without explicit human supervision, e.g., a set of manually selected input root and leaf concepts. This is achieved by leveraging structural information from a companion reference taxonomy, to which the input knowledge graph is linked (either automatically or manually). When used in conjunction with un-supervised methods for hypernym acquisition and knowledge base linking, our methodology provides a complete solution for end-to-end taxonomy induction. Our experiments using CM on automatically acquired knowledge graphs, as well as a SemEval benchmark, achieved good results.

#<b>Source Code</b>

The source code provided here allows to perform the ContrastMedium algorithm with two toy simple noisy graph.

To start experimenting with ContrastMedium:
<ul>
<li>clone/download the project;</li>
<li>open the project with <a href="https://netbeans.org/"> NetBeans</a>;</li>
<li>open the and edit the main class: <i>de.unima.contrastmedium.ContrastMedium</i>;</li>
<li>change the value of testnum for testing the algorithm within the two provided examples (row 26)</i>.</li>
</ul>

#<b>Publications</b>

Stefano Faralli, Alexander Panchenko, Chris Biemann and Simone Paolo Ponzetto (2017) <a href="https://ub-madoc.bib.uni-mannheim.de/42008/1/E17-1056.pdf">The ContrastMedium algorithm : taxonomy induction from noisy knowledge graphs with just a few links.</a> 15th Conference of the European Chapter of the Association for Computational Linguistics : proceedings of conference, volume 1: Long Papers; 590-600. Association for Computational Linguistics. <a href="http://web.informatik.uni-mannheim.de/joint/bibs/Farallietal2017a.bib" >bib</a>

#<b>License</b>

This software licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) License: https://creativecommons.org/licenses/by/4.0/.
