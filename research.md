---
title: Research
---
# Research

My PhD project centers around a central question: can we augment modern-scale artificial intelligence with a notion of *credibility*?

Credibility in this sense is not an expectation that a model provides accurate predictions for every query, but instead that it provides a reasonable and callibrated uncertainty estimate alongside its prediction. It gives us a number that explain whether we can trust the output of a model, or whether we should disregard it. In many real-world scenarios, this is crucial: from clinical settings to policy making, callibrated uncertainty is as important - if not more important - than a high model accuracy.

Nevertheless, it seems that much of the mainstream research focuses on increasing model accuracy and generalization at a population level: if we with high enough probability can expect the model to be acceptably accurate at any given input data, then we accept all predictions equally.
In practice, this is not very reassuring since decision making happens at the level of individual predictions: I might be able to trust most predictions in general, but can I trust *this* prediction?
Practitioners often have domain knowledge that influences their decision making. An oncologist might for example know what most tumors tend to look like and can recognize when a tumor looks unusual. If no uncertainty information is available alongside the prediction, the question arises: does the model actually know this, or is it guessing? Is this the one-in-a-thousand datapoint that evades the generalization bound? (remember it is only with high probability).

It turns out that we already have a way of incorporating uncertainty information into (simple) models: using Bayesian inference.
If we place a probability distribution over the parameters of a model (the "prior"), we can use Bayes' theorem to *infer* the parameter distribution that can generate observed labels given paired inputs (the "posterior"). For any query data points, we can then integrate/sample from the posterior to achieve those sweet, sweet error bars over predictions.

Bayesian inference has been used for almost a century, but when neural networks started to become mainstream in the 2010s and 2020s focus changed towards more deterministic optimization pipelines. Neural networks and Bayesian inference do not easily mix: existing methods break down in the ultra high dimensional parameter spaces where neural networks operate. 

**This is the core of my research.** If we can expand and approximate methods from the Bayesian paradigm into the space of large neural networks, we can achieve much more trustworthy predictions. 