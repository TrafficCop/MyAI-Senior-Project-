import { BlockType } from "@/types/block";

export const binary_classification_solutions = [
  {
    name: "Perfect: ReLU Master",
    overview: "This model achieves perfect accuracy (100%) by using multiple layers of ReLU units that work together like a team of expert mycologists. Each layer analyzes different aspects of mushroom features, with ReLU helping focus on the most important characteristics. The final layer combines all these insights to make flawless decisions about mushroom safety.",
    diagram: {
      blocks: [
        { block_id: "linear_layer" as BlockType, order: 1, params: { out_features: 64 } },
        { block_id: "relu_activation" as BlockType, order: 2, params: {} },
        { block_id: "linear_layer" as BlockType, order: 3, params: { out_features: 64 } },
        { block_id: "relu_activation" as BlockType, order: 4, params: {} },
        { block_id: "linear_layer" as BlockType, order: 5, params: { out_features: 64 } },
        { block_id: "relu_activation" as BlockType, order: 6, params: {} },
        { block_id: "linear_layer" as BlockType, order: 7, params: { out_features: 1 } },
        { block_id: "sigmoid_activation" as BlockType, order: 8, params: {} },
      ],
      execution: "train",
      dataset: "mushrooms",
      optimizer: "sgd_algorithm" as BlockType,
      loss_fn: "cross_entropy_loss" as BlockType,
      evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
      lr: 0.001,
      epochs: 20,
    },
    explanations: {
      model: "This model has three processing layers that work together like a team of mushroom experts. The first two layers process mushroom features using ReLU functions, which help identify important characteristics by keeping positive signals and removing negative ones, like a mycologist focusing on the most telling mushroom traits. The final layer combines all these insights to make the final edible/poisonous decision. Think of it like having two mushroom specialists who each analyze the features in different ways, and then a final expert who makes the final call based on their combined knowledge.",
      loss: "Cross entropy loss helps the model learn by comparing its mushroom predictions with actual outcomes. When the model makes a confident but wrong prediction, it gets a bigger penalty, encouraging it to be more careful about its predictions. This is like a mushroom expert learning from their mistakes - the bigger the mistake, the more they need to adjust their approach.",
      optimizer: "SGD (Stochastic Gradient Descent) helps the model learn by making small adjustments to its predictions based on how wrong it was. Like a mushroom expert refining their identification method after each mistake, it gradually improves its accuracy over time."
    },
    result: {
      f1_score_metric: 1.0,
      precision_metric: 1.0,
      recall_metric: 1.0,
      accuracy_metric: 1.0,
      false_positive_metric: 0.0,
    },
  },
  {
    name: "Leveraging Momentum",
    overview: "This model configuration follows a feedforward neural network structure designed for binary classification, leveraging momentum-based SGD to enhance stability and convergence. Unlike standard SGD, momentum helps the model accelerate learning by smoothing weight updates, reducing oscillations, and preventing it from getting stuck in sharp local minima. This effect is especially beneficial in deep networks, where successive linear layers and ReLU activations enable hierarchical feature extraction while momentum ensures a steady optimization path. Additionally, dropout regularization mitigates the risk of overfitting, allowing momentum to improve convergence without excessive reliance on specific neurons. By combining momentum-driven optimization with structured feature learning, the model achieves both efficiency and generalization, making it well-suited for complex classification tasks.",
    diagram: {
      blocks: [
        { block_id: "linear_layer" as BlockType, order: 1, params: { out_features: 64 } },
        { block_id: "relu_activation" as BlockType, order: 2, params: {} },
        { block_id: "linear_layer" as BlockType, order: 3, params: { out_features: 64 } },
        { block_id: "dropout_layer" as BlockType, order: 4, params: {} },
        { block_id: "linear_layer" as BlockType, order: 5, params: { out_features: 1 } },
        { block_id: "sigmoid_activation" as BlockType, order: 6, params: {} },
      ],
      execution: "train",
      dataset: "mushrooms",
      optimizer: "momentum_algorithm" as BlockType,
      loss_fn: "cross_entropy_loss" as BlockType,
      evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
      lr: 0.001,
      epochs: 20,
    },
    explanations: {
      model: "This model configuration follows a feedforward neural network structure optimized for binary classification, with momentum-based SGD helping stabilize training.",
      loss: "Cross entropy loss works well with sigmoid outputs because both deal with probabilities between 0 and 1. It helps the model learn by comparing its probability predictions with the true yes/no answers.",
      optimizer: "Momentum-based SGD improves learning efficiency by maintaining a moving average of past gradients, preventing oscillations, and ensuring stable weight updates."
    },
    result: {
      f1_score_metric: 1,
      precision_metric: 1,
      recall_metric: 1,
      accuracy_metric: 1,
      false_positive_metric: 0.0,
    },
  },  
  {
    name: "Preventing Overfitting with Dropout",
    overview: "During training, dropout helps prevent the model from becoming too dependent on specific patterns in the data by randomly turning off some of the connections between neurons. This forces the network to learn more robust and general features rather than memorizing details that might not apply to new data. By reducing this reliance on specific pathways, dropout makes the model better at handling unseen examples, ultimately improving its ability to generalize and reducing the risk of overfitting.",
    diagram: {
      blocks: [
        { block_id: "linear_layer" as BlockType, order: 1, params: { out_features: 64 } },
        { block_id: "dropout_layer" as BlockType, order: 2, params: {} },
        { block_id: "linear_layer" as BlockType, order: 3, params: { out_features: 1 } },
        { block_id: "sigmoid_activation" as BlockType, order: 4, params: {} },
      ],
      execution: "train",
      dataset: "mushrooms",
      optimizer: "sgd_algorithm" as BlockType,
      loss_fn: "cross_entropy_loss" as BlockType,
      evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
      lr: 0.001,
      epochs: 20,
    },
    explanations: {
      model: "Dropout randomly deactivates neurons during training to prevent the network from relying too heavily on specific features, which improves generalization and reduces overfitting.",
      loss: "Cross entropy loss works well with sigmoid outputs because both deal with probabilities between 0 and 1. It helps the model learn by comparing its probability predictions with the true yes/no answers.",
      optimizer: "SGD (Stochastic Gradient Descent) fine-tunes the weights in the single linear layer. It adjusts how much importance to give each mushroom feature to make the best possible prediction with this simple structure."
    },
    result: {
      f1_score_metric: 0.999,
      precision_metric: 1,
      recall_metric: 0.98,
      accuracy_metric: 0.999,
      false_positive_metric: 0.0,
    },
  },
  {
    name: "Excellent: Tanh Wizard (One-Layer Model)",
    overview: "This model performs exceptionally well (99% accuracy) despite its simplicity. Using a single layer with tanh activation, it creates clear boundaries between edible and poisonous mushrooms. Like a highly experienced mycologist who knows exactly which traits matter most, it efficiently identifies key mushroom features without needing multiple layers of analysis.",
    diagram: {
      blocks: [
        { block_id: "linear_layer" as BlockType, order: 1, params: { out_features: 1 } },
        { block_id: "tanh_activation" as BlockType, order: 2, params: {} },
      ],
      execution: "train",
      dataset: "mushrooms",
      optimizer: "sgd_algorithm" as BlockType,
      loss_fn: "hinge_loss" as BlockType,
      evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
      lr: 0.001,
      epochs: 20,
    },
    explanations: {
      model: "This model has one processing layer that works like a skilled mushroom identifier. The layer processes mushroom features using tanh, which helps make clear distinctions by amplifying strong signals and dampening weak ones, like an expert who knows exactly which mushroom traits are most important. Think of it like having a single, highly experienced mycologist who can quickly identify mushrooms based on their most distinctive features.",
      loss: "Hinge loss helps the model learn by creating a clear dividing line between edible and poisonous mushrooms. It wants predictions to be not just correct, but confidently correct - pushing the model to make clear distinctions, like a mushroom expert who needs to be absolutely certain before making a decision.",
      optimizer: "SGD (Stochastic Gradient Descent) helps the model learn by making small adjustments to its predictions based on how wrong it was. Like a mushroom expert refining their identification method after each mistake, it gradually improves its accuracy over time."
    },
    result: {
      f1_score_metric: 0.99,
      precision_metric: 1.0,
      recall_metric: 0.98,
      accuracy_metric: 0.99,
      false_positive_metric: 0.0,
    },
  },
  {
    name: "Decent: Sigmoid Explorer",
    overview: "This model achieves good performance (90.7% accuracy) through three layers of sigmoid units that work together to analyze mushroom features. Each layer gradually processes the information, helping the model consider multiple possibilities. Like a careful mushroom expert who takes time to weigh different characteristics, it sometimes misses the sharp distinctions between edible and poisonous mushrooms.",
    diagram: {
      blocks: [
        { block_id: "linear_layer" as BlockType, order: 1, params: { out_features: 64 } },
        { block_id: "sigmoid_activation" as BlockType, order: 2, params: {} },
        { block_id: "linear_layer" as BlockType, order: 3, params: { out_features: 64 } },
        { block_id: "sigmoid_activation" as BlockType, order: 4, params: {} },
        { block_id: "linear_layer" as BlockType, order: 5, params: { out_features: 1 } },
        { block_id: "sigmoid_activation" as BlockType, order: 6, params: {} },
      ],
      execution: "train",
      dataset: "mushrooms",
      optimizer: "sgd_algorithm" as BlockType,
      loss_fn: "cross_entropy_loss" as BlockType,
      evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
      lr: 0.001,
      epochs: 20,
    },
    explanations: {
      model: "This model has three processing layers that work together to identify mushrooms. Each layer uses sigmoid to convert mushroom features into probabilities between 0 and 1, helping the model consider different possibilities for each mushroom. Think of it like having three mushroom experts who each assign probabilities to different characteristics before making their final decision.",
      loss: "Cross entropy loss helps the model learn by comparing its mushroom predictions with actual outcomes. When the model makes a confident but wrong prediction, it gets a bigger penalty, encouraging it to be more careful about its predictions. This is like a mushroom expert learning from their mistakes - the bigger the mistake, the more they need to adjust their approach.",
      optimizer: "SGD (Stochastic Gradient Descent) helps the model learn by making small adjustments to its predictions based on how wrong it was. Like a mushroom expert refining their identification method after each mistake, it gradually improves its accuracy over time."
    },
    result: {
      f1_score_metric: 0.896,
      precision_metric: 0.967,
      recall_metric: 0.835,
      accuracy_metric: 0.907,
      false_positive_metric: 0.0,
    },
  },
  {
    name: "Okay: Softmax Struggler",
    overview: "This model has lower performance (74.6% accuracy) due to its simple single-layer architecture using softmax activation. While it tries to consider all possibilities by converting features into probabilities, its basic structure struggles to capture the complex relationships between mushroom characteristics. Like a novice mushroom expert who tries to consider everything at once, it sometimes gets confused when making clear yes/no decisions.",
    diagram: {
      blocks: [
        { block_id: "linear_layer" as BlockType, order: 1, params: { out_features: 1 } },
        { block_id: "softmax_activation" as BlockType, order: 2, params: {} },
      ],
      execution: "train",
      dataset: "mushrooms",
      optimizer: "sgd_algorithm" as BlockType,
      loss_fn: "hinge_loss" as BlockType,
      evalFns: ["accuracy_metric", "precision_metric", "recall_metric", "f1_score_metric"],
      lr: 0.001,
      epochs: 20,
    },
    explanations: {
      model: "This model has one processing layer that tries to identify mushrooms. The layer uses softmax to convert mushroom features into probabilities that add up to 100%, helping the model consider the likelihood of each mushroom being edible or poisonous. Think of it like having a single mushroom expert who tries to assign probabilities to different possibilities before making a decision.",
      loss: "Hinge loss helps the model learn by creating a clear dividing line between edible and poisonous mushrooms. It wants predictions to be not just correct, but confidently correct - pushing the model to make clear distinctions, like a mushroom expert who needs to be absolutely certain before making a decision.",
      optimizer: "SGD (Stochastic Gradient Descent) helps the model learn by making small adjustments to its predictions based on how wrong it was. Like a mushroom expert refining their identification method after each mistake, it gradually improves its accuracy over time."
    },
    result: {
      f1_score_metric: 0.741,
      precision_metric: 0.727,
      recall_metric: 0.756,
      accuracy_metric: 0.746,
      false_positive_metric: 0.0,
    },
  },
  
];
