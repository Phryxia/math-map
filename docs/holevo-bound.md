# Holevo 한계

# 개요

**Holevo 한계(Holevo bound)** 는 큐비트에 실어 보낸 고전 정보 가운데 받는 쪽이 측정으로 꺼낼 수 있는 양의 상한이고, 큐비트 $n$ 개로는 $n$ 비트를 넘지 못한다는 정리다. 큐비트 하나의 상태 $\cos\theta\vert 0\rangle+\sin\theta\vert 1\rangle$ 은 각도 $\theta$ 가 연속이므로, 앨리스가 긴 비트열을 $\theta$ 의 이진 전개에 적어 보내면 큐비트 하나로 많은 비트를 보낼 수 있을 것처럼 보인다. 밥이 측정하면 결과가 $0$ 이나 $1$ 하나뿐이고, Holevo 한계는 어떤 측정을 고르든 밥이 얻는 상호정보량이 보낸 상태들의 [밀도 행렬](density-matrix.md)로 계산되는 값 $\chi$ 이하이며 $\chi$ 는 $1$ 이하임을 보인다.

# 직관

앨리스가 비트 $X$ 를 고르게 뽑아 $X=0$ 이면 $\vert 0\rangle$, $X=1$ 이면 $\vert +\rangle=\tfrac1{\sqrt 2}(\vert 0\rangle+\vert 1\rangle)$ 을 보낸다. 두 상태는 직교하지 않으므로 밥은 둘을 확실히 가를 수 없다.

밥이 각도 $-\pi/8$ 의 기저 $\vert u\_0\rangle=\cos\tfrac\pi8\vert 0\rangle-\sin\tfrac\pi8\vert 1\rangle$, $\vert u\_1\rangle=\sin\tfrac\pi8\vert 0\rangle+\cos\tfrac\pi8\vert 1\rangle$ 로 측정하고 결과를 $Y$ 라 한다. $\vert 0\rangle$ 과 $\vert u\_0\rangle$ 의 각도 차이가 $\pi/8$, $\vert +\rangle$ 과 $\vert u\_1\rangle$ 의 각도 차이도 $\pi/8$ 이므로 $Y=X$ 일 확률이 어느 쪽이든 $\cos^2(\pi/8)\approx 0.854$ 다. 밥이 받는 것은 비트를 확률 $\sin^2(\pi/8)\approx 0.146$ 로 뒤집는 통로의 출력이고, 상호정보량은 $I(X;Y)=1-h(0.146)\approx 0.40$ 비트다. 여기서 $h$ 는 이진 [Shannon 엔트로피](entropy.md)다.

밥이 다른 측정을 골라도 이 값이 $1$ 비트까지 올라가지는 않는다. 보낸 두 상태의 평균 밀도 행렬은 $\rho=\tfrac12(\vert 0\rangle\langle 0\vert+\vert +\rangle\langle +\vert)=\begin{pmatrix}3/4&1/4\cr 1/4&1/4\end{pmatrix}$ 이고, 고윳값이 $\cos^2(\pi/8)$ 와 $\sin^2(\pi/8)$ 이다. Holevo 한계는 어떤 측정에서도 $I(X;Y)\le h(0.146)\approx 0.60$ 임을 준다.

# 정의

## Holevo 정보량

앨리스가 확률 $p\_x$ 로 고른 $x$ 에 따라 밀도 행렬 $\rho\_x$ 를 보내는 것을 **앙상블(ensemble)** $\lbrace p\_x,\rho\_x\rbrace$ 라 한다. 평균 $\rho=\sum_xp\_x\rho\_x$ 와 von Neumann 엔트로피 $S$ 로

$$
\chi\big(\lbrace p_x,\rho_x\rbrace\big)=S(\rho)-\sum_xp_xS(\rho_x)
$$

를 **Holevo 정보량(Holevo information)** 이라 한다. 직관 절의 앙상블은 $\rho\_x$ 가 순수 상태라 $S(\rho\_x)=0$ 이고, $\chi=S(\rho)=h(\cos^2(\pi/8))\approx 0.60$ 이다.

## 접근 가능한 정보량

밥이 측정 $M$ 을 하고 결과를 $Y$ 라 할 때, 모든 측정에 대한 상호정보량의 상한

$$
I_{\mathrm{acc}}=\sup_MI(X;Y)
$$

을 **접근 가능한 정보량(accessible information)** 이라 한다. 측정은 정규직교기저로 하는 것뿐 아니라 보조 큐비트를 붙여 큰 공간에서 측정하는 것도 포함한다. 직관 절의 측정이 주는 $0.40$ 은 이 상한의 하계다.

# 성질

## Holevo 정리

모든 앙상블에서 $I\_{\mathrm{acc}}\le\chi$ 다[^1]. 상태가 $\mathbb C^d$ 에 있으면 $\chi\le S(\rho)\le\log_2d$ 이므로, 큐비트 $n$ 개($d=2^n$)로 보낸 상태에서 밥이 얻는 정보는 $n$ 비트 이하다. 증명의 요지는 앨리스의 $x$ 를 고전 레지스터로 적은 상태 $\sum_xp\_x\vert x\rangle\langle x\vert\otimes\rho\_x$ 에서 밥의 측정이 양자 상호정보량을 줄이기만 한다는 것이다. 이 단조성은 von Neumann 엔트로피의 강한 부분가법성(strong subadditivity)에서 나온다.

## 등호와 직교 상태

$\rho\_x$ 들이 서로 직교하는 지지공간을 가지면 그 지지공간들로 측정해 $x$ 를 확실히 알 수 있고 $I\_{\mathrm{acc}}=\chi=H(X)$ 다. 직관 절처럼 직교하지 않는 순수 상태가 섞이면 $\chi\lt H(X)$ 이고, 일반적으로 $I\_{\mathrm{acc}}\lt\chi$ 다.

## 반복 전송과 달성 가능성

앙상블의 상태 $N$ 개를 이어 붙인 부호어를 보내고 밥이 $N$ 개를 함께 측정하면, 한 번에 보내는 비트 수는 $N\to\infty$ 에서 $\chi$ 에 가까이 갈 수 있다(Holevo–Schumacher–Westmoreland 정리, Holevo–Schumacher–Westmoreland theorem)[^2]. 직관 절의 앙상블에서 한 번씩 측정하면 $0.40$ 이 한계였지만, 여러 큐비트를 함께 측정하면 한 큐비트당 $0.60$ 비트에 가까이 간다. 이것은 [채널 부호화 정리](channel-coding.md)의 양자판이다.

## 얽힘과의 관계

[양자 순간이동](quantum-teleportation.md)의 초고밀도 부호화는 큐비트 하나를 보내 $2$ 비트를 전한다. 밥이 측정하는 것은 받은 큐비트와 미리 가진 반쪽을 합친 두 큐비트이므로 $d=4$ 이고, Holevo 한계 $\log_24=2$ 와 맞는다. 얽힘 없이 큐비트 하나만 보내면 $1$ 비트가 상한이다.

# 활용

- 양자 통신의 용량. 잡음 있는 양자 채널로 고전 정보를 보내는 용량은 채널 출력의 Holevo 정보량을 최대화한 값의 정규화로 주어진다.
- 양자 키 분배의 안전성. [양자 키 분배](quantum-key-distribution.md)에서 도청자가 측정으로 얻을 수 있는 정보의 상한을 도청자 쪽 상태의 Holevo 정보량으로 잰다.
- 양자 무작위 접근 부호. 비트 $n$ 개 가운데 아무 하나를 높은 확률로 읽게 해 주는 큐비트 $m$ 개의 부호에서 $m$ 은 $n$ 의 상수배 이상이어야 한다(Nayak 한계, Nayak bound)[^3]. 증명은 Holevo 한계를 비트마다 적용한다.

[^1]: A. S. Holevo, Bounds for the quantity of information transmitted by a quantum communication channel, *Problems of Information Transmission* 9 (1973), 177–183.
[^2]: A. S. Holevo, The capacity of the quantum channel with general signal states, *IEEE Transactions on Information Theory* 44 (1998), 269–273; B. Schumacher, M. D. Westmoreland, Sending classical information via noisy quantum channels, *Physical Review A* 56 (1997), 131–138.
[^3]: A. Nayak, Optimal lower bounds for quantum automata and random access codes, *Proceedings of the 40th IEEE Symposium on Foundations of Computer Science* (1999), 369–376.

# 연관 문서

## 선수지식

- [밀도 행렬](density-matrix.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #information_theory #linear_algebra
