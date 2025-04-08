import React, { useState } from "react";
import "../playground.css";
import "./Solution.css";
import { BlockType } from "@/types/block";
import { StandardBlock } from "@/components/blocks/standardBlock";
import { binary_classification_solutions } from "@/challenges/binary_classification/solutions";
import { multi_classification_solutions as weather_solutions } from "@/challenges/weather_classification/weatherSolutions";


export const SolutionsView: React.FC<{
 challengeId: string;
}> = ({ challengeId }) => {
 const [selectedSolution, setSelectedSolution] = useState<number>(0);


 const getSolutions = () => {
   switch (challengeId) {
     case "weather-multi-classification":
       return weather_solutions;
     case "mushroom-binary-classification":
       return binary_classification_solutions;
     default:
       return binary_classification_solutions;
   }
 };


 const solutions = getSolutions();


 const metricKeyMapping: Record<string, string> = {
   accuracy_metric: "Accuracy",
   precision_metric: "Precision",
   recall_metric: "Recall",
   f1_score_metric: "F1 Score",
 };


 // Create a dummy block object for the StandardBlock component
 const createDummyBlock = (type: string, index: number) => ({
   id: index,
   type: type as BlockType,
   status: "available" as const,
   allBlocks: {}
 });


 return (
   <div className="solutions-view">
     <div className="solutions-left-column">
       {solutions.map((solution, index) => {
         return (
           <button
             className={`solution-button ${selectedSolution === index ? "active" : ""}`}
             key={index}
             onClick={() => setSelectedSolution(index)}
           >
             <p className="solution-button-name">{solution.name}</p>
             <p className="solution-button-accuracy">
               {solution.result.accuracy_metric * 100}% Accuracy
             </p>
           </button>
         );
       })}
     </div>
     <div className="solutions-right-column">
       {/* Overview Section */}
       <div className="solution-overview">
         <p>{solutions[selectedSolution].overview}</p>
       </div>
       {/* The Diagram Model */}
       <table className="metrics-table model-design-table">
         <thead>
           <tr>
             <th>Component</th>
             <th>Block</th>
             <th>Explanation</th>
           </tr>
         </thead>
         <tbody>
           <tr key={"model-blocks"}>
             <td>Model Design</td>
             <td style={{ width: "200px" }}>
               <div className="blocks-container">
                 {solutions[selectedSolution].diagram.blocks.map((block, index) => (
                   <div key={index} className="block-container">
                     <StandardBlock {...createDummyBlock(block.block_id, index)} />
                   </div>
                 ))}
               </div>
             </td>
             <td>{solutions[selectedSolution].explanations.model}</td>
           </tr>
           <tr key={"loss-function"}>
             <td>Loss Function</td>
             <td>
               <div className="block-container">
                 <StandardBlock
                   {...createDummyBlock(
                     solutions[selectedSolution].diagram.loss_fn,
                     -1
                   )}
                 />
               </div>
             </td>
             <td>{solutions[selectedSolution].explanations.loss}</td>
           </tr>
           <tr key={"learning-algorithm"}>
             <td>Learning Algorithm</td>
             <td>
               <div className="block-container">
                 <StandardBlock
                   {...createDummyBlock(
                     solutions[selectedSolution].diagram.optimizer,
                     -2
                   )}
                 />
               </div>
             </td>
             <td>{solutions[selectedSolution].explanations.optimizer}</td>
           </tr>
         </tbody>
       </table>
       {/* Metrics Table */}
       <table className="metrics-table">
         <thead>
           <tr>
             <th>Metric</th>
             <th>Value (%)</th>
           </tr>
         </thead>
         <tbody>
           {Object.entries(solutions[selectedSolution].result).map(
             ([key, value]) =>
               metricKeyMapping[key] && (
                 <tr key={key}>
                   <td>{metricKeyMapping[key]}</td>
                   <td>{(value * 100).toFixed(2)}</td>
                 </tr>
               )
           )}
         </tbody>
       </table>
     </div>
   </div>
 );
};