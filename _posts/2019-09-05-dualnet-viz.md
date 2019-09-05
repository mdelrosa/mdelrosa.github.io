---
layout: post
title:  "Visualizing CNN Layers in CSI Estimation"
tags: ['Python','Deep Learning','Machine Learning','Visualization']
---

I have been working on deep learning in the context of CSI estimation in MIMO systems using FDD modulation schemes. While correlations between uplink and downlink are weaker than those in TDD schemes, spatial and spectral correlations still provide useful information. In [[1](#r1)], the authors train a network, DualNet, to leverage uplink and downlink reciprocity in estimating downlink CSI.

While trying to extend train DualNet on a 128 antenna dataset (the original implementation uses 32 antennas), I noticed that the training time became prohbitively long. For \\(10^5\\) samples, the estimated training time was 76 days. To speed up the training time, I wondered where I might be able to reduce the number of parameters in the network.

To cut down on trainable parameters, I needed to understand what sorts of activations the network was learning. If certain layers are largely inactive, then perhaps those layers can be removed. To visualize hidden layers, I retooled a tutorial [[2](#r2)] where the author visualizes the activations for a shape-classifying Convolutional Neural Network (CNN).

## The DualNet Model

First, I provide a brief summary of DualNet. The premise of DualNet is that despite weak phase correlation between uplink and downlink, the magnitude correlation and absolute value correlations are high (see Figure 1).

![Uplink/downlink correlations][corr]{:.mx-auto.d-block.img-fluid.max-width: 65%;}

<center>
<small>Figure 1: Correlation between corresponding uplink/downlink CSI for different characteristics.</small></center><br>

With this observation, DualNet is tailored to accept either the magnitude or the absolute value of CSI. The magnitude variant, DualNet-MAG, is shown in Figure 2. DualNet assumes that a user equipment (UE) will leverage a CNN (the Encoder) to compress the downlink feedback and that the base station (BS) will use another CNN (the Decoder) to use encoded downlink and raw uplink values to estimate the downlink.

![DualNet-MAG][dualnetmag]{:.mx-auto.d-block.img-fluid.max-width: 100%;}

<center>
<small>Figure 2: Block diagram for DualNet-MAG, a deep neural network that estimates downlink CSI based on correlations between the magnitude of uplink and downlink CSI.</small></center><br>

The Keras implementaion of DualNet-MAG and DualNet-ABS can be found in [[3](#r3)]. Assuming a compression ratio of \\(1/4\\), the network summary is shown in Figure 3. Even though there are only 32 antennas, the number of trainable parameters is already fairly large (\\(\approx 8\cdot 10^5\\)). However, the preponderance (about \\(\approx 99%\\)) of the parameters appear to be in the Dense layers.

![DualNet-MAG Summary][summary]{:.mx-auto.d-block.img-fluid.max-width: 100%;}

<center>
<small>Figure 3: Keras summary of DualNet-MAG model.</small></center><br>

## The Activation Model

Now we look at layer-wise activations. After training the DualNet model, I pulled some samples from the validation set for the visualization. The code for this can be found in [my fork](https://github.com/mdelrosa/Bi-Directional-Channel-Reciprocity/blob/master/viz/visualize_activations.ipynb) of [[3](r3)]. Below, I share some layer activations for a few layers of interest

### Input Residual Network (Encoder)

The encoder's activations are shown in Figure 4. The layers' outputs largely assume the same value except for the last row of the matrix. This means that the layer may not be contributing substantial information to the encoding.

<!-- Image snippet -->

<div class='container'>
    <div class='row justify-content-md-center max-width: 100%'>
        <div>
            <img src="/images/blog/2019/09/05/res1/conv2d_1.png" class="col img-fluid" alt='2D Convolution layer for Encoder residual network.' />
        </div>
        <div>
            <img src="/images/blog/2019/09/05/res1/batch_normalization_1.png" class="col img-fluid" alt='Batch normalization layer for Encoder residual network.' />
        </div>
        <div>
            <img src="/images/blog/2019/09/05/res1/leaky_re_lu_1.png" class="col img-fluid" alt='Leaky relu layer for Encoder residual network.' />
        </div>
    </div>
</div>

<center>
<small>Figure 4: Residual network activations in Encoder network.</small></center><br>

### Dense Layer Output (Encoder)

The activations after the second dense network and the corresponding uplink CSI magnitude are shown in Figure 5. Despite the encoded downlink CSI having no apparent structure, the decoder is still able to reconstruct the accurate estimates of the downlink.

![Reshaped layer containing encoded downlink and original uplink samples.][dense]{:.col.img-fluid}

<!-- ![2D Convolution layer for Encoder residual network.][conv1]{:.col.img-fluid}
![Batch norm layer for Encoder residual network.][batch1]{:.col.img-fluid}
![Relu layer for Encoder residual network.][relu1]{:.col.img-fluid} -->

<center>
<small>Figure 5: Input to the decoder (after reshaping to 32x32) combining encoded downlink CSI and original uplink CSI.</small></center><br>

### Residual Network (Decoder)

In this model, DualNet's decoder has two daisy-chained residual networks. The activations through one of these networks can be seen in Figure 6. In contrast to the Encoder's residual network, most of these layers appear to have non-negligible learned features.

<div class='container'>
    <div class='row justify-content-md-center max-width: 100%'>
        <div>
            <img src="/images/blog/2019/09/05/res2/conv2d_2.png" class="col img-fluid" alt='1st 2D Convolution layer for Encoder residual network (8 filters).' />
        </div>
        <div>
            <img src="/images/blog/2019/09/05/res2/batch_normalization_2.png" class="col img-fluid" alt='1st Batch normalization layer for Encoder residual network.' />
        </div>
        <div>
            <img src="/images/blog/2019/09/05/res2/leaky_re_lu_2.png" class="col img-fluid" alt='1st Leaky relu layer for Encoder residual network.' />
        </div>
            <div>
            <img src="/images/blog/2019/09/05/res2/conv2d_3.png" class="col img-fluid" alt='2nd 2D Convolution layer for Encoder residual network (16 filters).' />
        </div>
        <div>
            <img src="/images/blog/2019/09/05/res2/batch_normalization_3.png" class="col img-fluid" alt='2nd Batch normalization layer for Encoder residual network.' />
        </div>
        <div>
            <img src="/images/blog/2019/09/05/res2/leaky_re_lu_3.png" class="col img-fluid" alt='2nd Leaky relu layer for Encoder residual network.' />
        </div>
        <div>
            <img src="/images/blog/2019/09/05/res2/conv2d_4.png" class="col img-fluid" alt='3rd 2D Convolution layer for Encoder residual network (16 filters).' />
        </div>
        <div>
            <img src="/images/blog/2019/09/05/res2/batch_normalization_4.png" class="col img-fluid" alt='3rd Batch normalization layer for Encoder residual network.' />
        </div>
        <div>
            <img src="/images/blog/2019/09/05/res2/leaky_re_lu_4.png" class="col img-fluid" alt='3rd Leaky relu layer for Encoder residual network.' />
        </div>
    </div>
</div>

<center>
<small>Figure 6: Convolutional, batch normalization, and relu layers for Decoder residual network. Number of filters for the three stages are 8, 16, and 2.</small></center><br>

### Output Layer

Finally, we compare the network's output, the learned CSI, to the true downlink CSI in Figure 7.

![Comparison of DualNet's output with original downlink CSI input.][compare]{:.col.img-fluid}
<center>
<small>Figure 7: DualNet's output (left) compared with original downlink CSI input (right).</small></center><br>

## Discussion

*Dense layers*: Based on the above visualization, the dense layers between the encoder and the decoder appear to contribute substantially to the encoding. It remains an open question what the minimum necessary dimension of this layer needs to be, so further work into changing the structure of the dense layers would be worthwhile given their large dimensionality.

*Encoder layers*: Anoter potential area of improvement could be the encoder. Based on Figure 4, it seems that the initial residual network is not contributing much information as its relu layer's activations are sparse. Removing the convolutional layers from the encoder would reduce the complexity of the network and may improve training time. Given that the encoder is meant to operate at the UE, which is likely to have fewer computational resources than the BS, such an approach might be appealing.

## References

- <a name='r1'>[1]</a>. Z. Liu, L. Zhang and Z. Ding, "Exploiting Bi-Directional Channel Reciprocity in Deep Learning for Low Rate Massive MIMO CSI Feedback," in IEEE Wireless Communications Letters, vol. 8, no. 3, pp. 889-892, June 2019.
- <a name='r2'>[2]</a>. Pierobon, G. "Visualizing intermediate activation in Convolutional Neural Networks with Keras," Medium. November 2018. [Link](https://towardsdatascience.com/visualizing-intermediate-activation-in-convolutional-neural-networks-with-keras-260b36d60d0)
- <a name='r3'>[3]</a>. DLinWL, [Bi-Directional-Channel-Reciprocity](https://github.com/DLinWL/Bi-Directional-Channel-Reciprocity)

[corr]: /images/blog/2019/09/05/corr.PNG
[dualnetmag]: /images/blog/2019/09/05/dualnetmag.PNG
[summary]: /images/blog/2019/09/05/summary.PNG
[conv1]: /images/blog/2019/09/05/res1/conv2d_1.png
[batch1]: /images/blog/2019/09/05/res1/batch_normalization_1.png
[relu1]: /images/blog/2019/09/05/res1/leaky_re_lu_1.png
[dense]: /images/blog/2019/09/05/dense/reshape_3.png
[conv2]: /images/blog/2019/09/05/res2/conv2d_2.png
[batch2]: /images/blog/2019/09/05/res2/batch_normalization_2.png
[relu2]: /images/blog/2019/09/05/res2/leaky_re_lu_2.png
[conv3]: /images/blog/2019/09/05/res2/conv2d_3.png
[batch3]: /images/blog/2019/09/05/res2/batch_normalization_3.png
[relu3]: /images/blog/2019/09/05/res2/leaky_re_lu_3.png
[conv4]: /images/blog/2019/09/05/res2/conv2d_4.png
[batch4]: /images/blog/2019/09/05/res2/batch_normalization_4.png
[relu4]: /images/blog/2019/09/05/res2/leaky_re_lu_4.png
[compare]: /images/blog/2019/09/05/compare.png