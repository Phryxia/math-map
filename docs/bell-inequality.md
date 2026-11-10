# Bell 부등식

# 개요

**Bell 부등식(Bell inequality)** 은 측정 결과가 측정 전에 정해져 있고 멀리 떨어진 쪽의 선택에 영향받지 않는다면, 두 곳의 측정 결과가 맞아떨어지는 정도가 넘을 수 없는 한계를 주는 부등식이다. 앨리스와 밥이 서로 연락하지 못한 채 각자 동전 하나씩의 결과 $x,y$ 를 받고 비트 $a,b$ 를 하나씩 답하며, $a\oplus b=x\wedge y$ 이면 이기는 놀이를 한다. 미리 어떤 약속을 정해 두어도 이길 확률은 $3/4$ 을 넘지 못하지만, 얽힌 큐비트 한 쌍을 나눠 가지고 각자 측정하면 이길 확률이 약 $0.854$ 가 된다. Bell 부등식은 이 차이로 양자 측정의 상관이 미리 정해진 값으로는 설명되지 않음을 보인다.

# 직관

앨리스의 답을 $x$ 의 함수 $a(x)$, 밥의 답을 $y$ 의 함수 $b(y)$ 로 미리 정해 두었다고 하자. 네 경우를 모두 이기려면

$$
a(0)\oplus b(0)=0,\quad a(0)\oplus b(1)=0,\quad a(1)\oplus b(0)=0,\quad a(1)\oplus b(1)=1
$$

이어야 한다. 네 식의 좌변을 모두 배타적 논리합으로 더하면 $a(0),a(1),b(0),b(1)$ 이 두 번씩 나와 $0$ 이고, 우변을 더하면 $1$ 이다. 그래서 네 식을 동시에 만족하는 약속은 없고, 어느 약속이든 네 경우 가운데 많아야 셋에서 이긴다.

$x,y$ 가 고르게 나오면 이길 확률은 $3/4$ 이하다. 공유한 난수로 약속을 고르는 전략은 고정된 약속들의 평균이므로 역시 $3/4$ 이하다.

[양자 회로](quantum-circuits.md)의 두 큐비트 상태 $\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 의 첫 큐비트를 앨리스가, 둘째 큐비트를 밥이 가진다. 각자 받은 비트에 따라 정해 둔 각도만큼 돌린 기저로 측정하면, 두 결과가 같을 확률은 두 각도의 차이로만 정해진다. 각도를 알맞게 고르면 네 경우 모두에서 확률 $\cos^2(\pi/8)\approx 0.854$ 로 이긴다.

# 정의

## CHSH 놀이

**CHSH 놀이(CHSH game)** 는 다음 규칙의 두 사람 놀이다. 이름은 이 부등식을 실험 가능한 꼴로 쓴 Clauser, Horne, Shimony, Holt 의 머리글자다[^1].

1. 심판이 $x,y\in\lbrace 0,1\rbrace$ 를 독립으로 고르게 뽑아 $x$ 는 앨리스에게, $y$ 는 밥에게 보낸다.
2. 앨리스와 밥은 서로 연락하지 않고 $a,b\in\lbrace 0,1\rbrace$ 를 답한다.
3. $a\oplus b=x\wedge y$ 이면 이긴다.

$x=y=1$ 이면 두 답이 달라야 하고, 나머지 세 경우에는 같아야 한다.

## 국소 숨은 변수 모형

두 사람의 답이 $(a,b)$ 일 [확률](probability.md)을 $P(a,b\mid x,y)$ 라 한다. 공유한 무작위 값 $\lambda$ 의 분포 $p(\lambda)$ 와, $\lambda$ 와 자기 입력만 보고 답을 정하는 확률 $P_A(a\mid x,\lambda)$, $P_B(b\mid y,\lambda)$ 가 있어

$$
P(a,b\mid x,y)=\sum_\lambda p(\lambda)P_A(a\mid x,\lambda)P_B(b\mid y,\lambda)
$$

로 쓰일 때, 이 상관을 **국소 숨은 변수 모형(local hidden variable model)** 이라 한다. 직관 절의 약속 $a(x)$, $b(y)$ 는 $\lambda$ 가 하나뿐이고 확률이 $0$ 이나 $1$ 인 경우다.

## CHSH 부등식

$E(x,y)=P(a=b\mid x,y)-P(a\ne b\mid x,y)$ 를 **상관값(correlator)** 이라 하고

$$
S=E(0,0)+E(0,1)+E(1,0)-E(1,1)
$$

로 둔다. 국소 숨은 변수 모형에서 $\vert S\vert\le 2$ 라는 부등식을 **CHSH 부등식(CHSH inequality)** 이라 한다[^1]. CHSH 놀이에서 이길 확률은 다음과 같다.

$$
\frac14\sum_{x,y}\frac12\big(1\pm E(x,y)\big)=\frac12+\frac S8
$$

그러므로 $\vert S\vert\le 2$ 와 이길 확률 $3/4$ 이하가 같은 말이다. 직관 절의 약속 $a\equiv b\equiv 0$ 은 $E(0,0)=E(0,1)=E(1,0)=E(1,1)=1$ 이라 $S=2$ 이고 이길 확률이 $3/4$ 이다.

## 회전한 기저의 측정

각도 $\theta$ 에 대해 $\vert u\_0(\theta)\rangle=\cos\theta\vert 0\rangle+\sin\theta\vert 1\rangle$, $\vert u\_1(\theta)\rangle=-\sin\theta\vert 0\rangle+\cos\theta\vert 1\rangle$ 은 $\mathbb C^2$ 의 정규직교기저다. 큐비트에 회전 $\begin{pmatrix}\cos\theta&\sin\theta\cr -\sin\theta&\cos\theta\end{pmatrix}$ 을 걸고 계산 기저로 측정하는 것을 각도 $\theta$ 의 기저로 측정한다고 한다. 결과 $c$ 는 상태가 $\vert u\_c(\theta)\rangle$ 쪽 성분을 가질 확률로 나온다.

$\vert\Phi^+\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 을 앨리스는 각도 $\alpha$, 밥은 각도 $\beta$ 의 기저로 측정한다. 실수 성분의 벡터 $p,q\in\mathbb C^2$ 에 대해 $(\langle p\vert\otimes\langle q\vert)\vert\Phi^+\rangle$ 은 두 벡터의 내적을 $\sqrt 2$ 로 나눈 값이고, $\vert u\_c(\alpha)\rangle$ 과 $\vert u\_c(\beta)\rangle$ 의 내적은 $c=0,1$ 모두 $\cos(\alpha-\beta)$ 이므로

$$
P(a=b)=\cos^2(\alpha-\beta),\qquad E=\cos 2(\alpha-\beta)
$$

이다.

# 성질

## 양자 전략

앨리스가 $x=0$ 이면 $\alpha\_0=0$, $x=1$ 이면 $\alpha\_1=\pi/4$ 의 기저로, 밥이 $y=0$ 이면 $\beta\_0=\pi/8$, $y=1$ 이면 $\beta\_1=-\pi/8$ 의 기저로 측정한다. 각도의 차이는 $(x,y)=(0,0),(0,1),(1,0)$ 에서 $\pm\pi/8$ 이라 두 답이 같을 확률이 $\cos^2(\pi/8)$ 이고, $(1,1)$ 에서 $3\pi/8$ 이라 두 답이 다를 확률이 $1-\cos^2(3\pi/8)=\cos^2(\pi/8)$ 이다. 이길 확률은

$$
\cos^2\frac\pi8=\frac{2+\sqrt 2}4\approx 0.854
$$

이고 $S=2\sqrt 2\gt 2$ 이다. 따라서 이 상관은 어떤 국소 숨은 변수 모형으로도 쓰이지 않는다. 이것을 **Bell 정리(Bell's theorem)** 라 한다[^2].

## Tsirelson 상한

양자 전략의 $S$ 는 $2\sqrt 2$ 를 넘지 못한다[^3]. 앨리스의 측정을 [고윳값](eigenvalues.md)이 $\pm 1$ 인 에르미트 행렬 $A\_0,A\_1$, 밥의 측정을 $B\_0,B\_1$ 로 쓰면 $S$ 는 행렬

$$
C=A\_0\otimes(B\_0+B\_1)+A\_1\otimes(B\_0-B\_1)
$$

의 기댓값이다. $A\_x^2=B\_y^2=I$ 를 써서 전개하면 $C^2=4I-\lbrack A\_0,A\_1\rbrack\otimes\lbrack B\_0,B\_1\rbrack$ 이고, 각 교환자의 노름이 $2$ 이하이므로 $C^2$ 의 노름이 $8$ 이하다. 따라서 $\vert S\vert\le 2\sqrt 2$ 이고, 이길 확률은 $\cos^2(\pi/8)$ 이하다. 양자 전략 절의 각도가 이 상한을 달성한다.

## 신호 불가능성

밥의 측정은 앨리스 쪽 큐비트만의 측정 확률을 바꾸지 않으므로, 양자 전략에서 앨리스의 답의 분포 $\sum_b P(a,b\mid x,y)$ 는 $y$ 에 의존하지 않는다. 그래서 얽힘을 나눠 가져도 연락 없이 정보를 보낼 수는 없다. 신호 불가능성만 요구하면 $S=4$ 인 상관, 곧 언제나 이기는 상관도 만들 수 있다(Popescu–Rohrlich 상자, Popescu–Rohrlich box)[^4]. 양자 상관은 국소 숨은 변수 모형보다 크고 신호 불가능한 상관 전체보다 작다.

# 활용

- [대화형 증명](interactive-proofs.md). 얽힘을 공유한 증명자 둘을 둔 대화형 증명은 부류 $\mathrm{MIP}^\ast$(multi-prover interactive proofs with entanglement)를 정의하고, [MIP = NEXP 정리](mip-nexp.md)의 증명자 사이에 얽힘을 허용했을 때의 결과가 $\mathrm{MIP}^\ast=\mathrm{RE}$ 다. CHSH 놀이처럼 증명자 둘에게 따로 묻고 답을 대조하는 놀이가 그 증명의 기본 단위다.
- 양자 키 분배. [양자 키 분배](quantum-key-distribution.md)의 한 방식인 Ekert 의 규약은 얽힌 쌍을 나눠 측정한 결과로 비밀 키를 만들고, 측정 일부로 $S$ 를 계산해 $2\sqrt 2$ 에 가까운지로 도청을 검출한다[^5].
- 장치 무관 난수. $S\gt 2$ 가 관측되면 측정 결과가 미리 정해진 값일 수 없으므로, 장치의 내부를 믿지 않고도 결과에 무작위성이 들어 있다고 결론짓는다.
- 실험. 두 측정 장소를 빛이 오갈 수 없을 만큼 떼어 놓고 측정 선택을 무작위로 정한 실험에서 CHSH 부등식이 깨진 것이 관측되었다[^6].

[^1]: J. F. Clauser, M. A. Horne, A. Shimony, R. A. Holt, Proposed experiment to test local hidden-variable theories, *Physical Review Letters* 23 (1969), 880–884.
[^2]: J. S. Bell, On the Einstein Podolsky Rosen paradox, *Physics* 1 (1964), 195–200.
[^3]: B. S. Cirel'son, Quantum generalizations of Bell's inequality, *Letters in Mathematical Physics* 4 (1980), 93–100.
[^4]: S. Popescu, D. Rohrlich, Quantum nonlocality as an axiom, *Foundations of Physics* 24 (1994), 379–385.
[^5]: A. K. Ekert, Quantum cryptography based on Bell's theorem, *Physical Review Letters* 67 (1991), 661–663.
[^6]: B. Hensen et al., Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres, *Nature* 526 (2015), 682–686.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #probability #linear_algebra
