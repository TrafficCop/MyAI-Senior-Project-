import { BlockType } from "@/types/block";


export const multi_classification_solutions = [
 {
   name: "Best: Tanh-Based Performer",
   overview: "This model achieves the best performance (75.8% accuracy) through multiple layers of tanh units that work together like a team of weather experts. Each layer analyzes different aspects of weather patterns, with tanh helping identify the most significant indicators. The final layer combines all these insights to make accurate weather predictions.",
   diagram: {
     blocks: [
       { block_id: "linear_layer", order: 1, params: { out_features: 64 } },
       { block_id: "tanh_activation", order: 2, params: {} },
       { block_id: "linear_layer", order: 3, params: { out_features: 64 } },
       { block_id: "tanh_activation", order: 4, params: {} },
       { block_id: "linear_layer", order: 5, params: { out_features: 1 } },
     ],
     execution: "train",
     dataset: "weather",
     optimizer: "momentum_algorithm" as BlockType,
     loss_fn: "cross_entropy_loss" as BlockType,
     evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
     lr: 0.001,
     epochs: 20,
   },
   explanations: {
     model: "This model has three processing layers that work together like a weather analysis team. The first two layers process weather data using tanh functions, which help identify important weather patterns by making strong signals stronger and weak ones weaker. The final layer combines all these patterns to make the final weather prediction. Think of it like having two weather analysts who each look at the data in different ways, and then a final expert who makes the decision based on their combined insights.",
     optimizer: "The momentum algorithm helps the model learn by keeping track of its previous adjustments, similar to how a weather forecaster might remember what worked well in similar past situations. This helps the model make more consistent improvements to its predictions over time.",
     loss: "Cross entropy loss helps the model learn by comparing its weather predictions with the actual weather outcomes. When the model makes a confident but wrong prediction, it gets a bigger penalty, encouraging it to be more careful about its predictions. This is like a weather forecaster learning from their mistakes - the bigger the mistake, the more they need to adjust their approach."
   },
   result: {
     accuracy_metric: 0.758,
     f1_score_metric: 0.323,
     precision_metric: 0.306,
     recall_metric: 0.346,
   },
 },
 {
   name: "Good: ReLU Explorer",
   overview: "This model performs well (74.7% accuracy) using two layers of ReLU units that work together to analyze weather patterns. The first layer processes weather data using ReLU to focus on the most important signals, while the final layer makes the weather prediction. Like a weather forecaster who quickly identifies key patterns, it efficiently processes weather information without needing multiple layers of analysis.",
   explanations: {
     model: "This model has two processing layers that work together to predict weather. The first layer processes weather data using ReLU, which keeps important weather signals and removes less relevant ones, like a weather forecaster focusing on the most significant changes. The final layer then uses these focused signals to make the weather prediction. It's like having a weather analyst who quickly identifies the most important weather indicators and then an expert who makes the final call.",
     optimizer: "SGD (Stochastic Gradient Descent) helps the model learn by making small adjustments to its predictions based on how wrong it was. Like a weather forecaster making small tweaks to their prediction method after each day, it gradually improves its accuracy over time.",
     loss: "Cross entropy loss helps the model learn by comparing its weather predictions with actual outcomes. When the model makes a confident but wrong prediction, it gets a bigger penalty, encouraging it to be more careful about its predictions. This is like a weather forecaster learning from their mistakes - the bigger the mistake, the more they need to adjust their approach."
   },
   diagram: {
     blocks: [
       { block_id: "linear_layer", order: 1, params: { out_features: 64 } },
       { block_id: "relu_activation", order: 2, params: {} },
       { block_id: "linear_layer", order: 3, params: { out_features: 1 } },
     ],
     execution: "train",
     dataset: "weather",
     optimizer: "sgd_algorithm",
     loss_fn: "cross_entropy_loss",
     evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
     lr: 0.001,
     epochs: 20,
   },
   result: {
     accuracy_metric: 0.747,
     f1_score_metric: 0.32,
     precision_metric: 0.305,
     recall_metric: 0.341,
   },
 },
 {
   name: "Decent: Softmax Challenger",
   overview: "This model achieves moderate performance (63.5% accuracy) through two layers of softmax units that work together to analyze weather patterns. Each layer processes the information by converting weather signals into probabilities, helping the model consider multiple possibilities. Like a weather forecaster who carefully weighs different outcomes, it sometimes becomes less certain about its predictions.",
   explanations: {
     model: "This model has two processing layers that work together to predict weather. The first layer processes weather data using softmax, which converts weather signals into probabilities that add up to 100%, helping the model consider multiple weather possibilities at once. The final layer then uses these probabilities to make the final prediction. Think of it like a weather forecaster who assigns probabilities to different weather outcomes before making their final prediction.",
     optimizer: "SGD (Stochastic Gradient Descent) helps the model learn by making small adjustments to its predictions based on how wrong it was. Like a weather forecaster making small tweaks to their prediction method after each day, it gradually improves its accuracy over time.",
     loss: "Cross entropy loss helps the model learn by comparing its weather predictions with actual outcomes. When the model makes a confident but wrong prediction, it gets a bigger penalty, encouraging it to be more careful about its predictions. This is like a weather forecaster learning from their mistakes - the bigger the mistake, the more they need to adjust their approach."
   },
   diagram: {
     blocks: [
       { block_id: "linear_layer", order: 1, params: { out_features: 64 } },
       { block_id: "softmax_activation", order: 2, params: {} },
       { block_id: "linear_layer", order: 3, params: { out_features: 1 } },
     ],
     execution: "train",
     dataset: "weather",
     optimizer: "sgd_algorithm",
     loss_fn: "cross_entropy_loss",
     evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
     lr: 0.001,
     epochs: 20,
   },
   result: {
     accuracy_metric: 0.635,
     f1_score_metric: 0.269,
     precision_metric: 0.254,
     recall_metric: 0.289,
   },
 },
 {
   name: "Okay: Softmax Struggler",
   overview: "This model has the lowest performance (43.7% accuracy) due to its complex architecture with multiple softmax layers. While each layer tries to process weather information by converting signals into probabilities, the repeated conversions add uncertainty to the predictions. Like a weather forecaster who overcomplicates their analysis, it gets confused when trying to make clear weather predictions.",
   explanations: {
     model: "This model has four processing layers that work together to predict weather. Each layer uses softmax to convert weather signals into probabilities that add up to 100%. However, using softmax multiple times in a row makes the model get confused, like a weather forecaster who repeatedly converts their confidence levels into percentages - each conversion adds uncertainty. The final layer tries to make sense of all these uncertain probabilities to make a prediction.",
     optimizer: "SGD (Stochastic Gradient Descent) helps the model learn by making small adjustments to its predictions based on how wrong it was. Like a weather forecaster making small tweaks to their prediction method after each day, it gradually improves its accuracy over time.",
     loss: "Cross entropy loss helps the model learn by comparing its weather predictions with actual outcomes. When the model makes a confident but wrong prediction, it gets a bigger penalty, encouraging it to be more careful about its predictions. This is like a weather forecaster learning from their mistakes - the bigger the mistake, the more they need to adjust their approach."
   },
   diagram: {
     blocks: [
       { block_id: "linear_layer", order: 1, params: { out_features: 64 } },
       { block_id: "softmax_activation", order: 2, params: {} },
       { block_id: "linear_layer", order: 3, params: { out_features: 64 } },
       { block_id: "softmax_activation", order: 4, params: {} },
       { block_id: "linear_layer", order: 5, params: { out_features: 64 } },
       { block_id: "softmax_activation", order: 6, params: {} },
       { block_id: "linear_layer", order: 7, params: { out_features: 1 } },
     ],
     execution: "train",
     dataset: "weather",
     optimizer: "sgd_algorithm",
     loss_fn: "cross_entropy_loss",
     evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
     lr: 0.001,
     epochs: 20,
   },
   result: {
     accuracy_metric: 0.4369,
     f1_score_metric: 0.122,
     precision_metric: 0.087,
     recall_metric: 0.2,
   },
 },
];