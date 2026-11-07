# 퍼셉트론

# 개요

**퍼셉트론(perceptron)** 은 두 부류로 나뉜 점들을 가르는 직선을, 잘못 가른 점을 하나 볼 때마다 그 점 쪽으로 고쳐 가며 찾는 학습 규칙이다. 평면의 점 $(1,2)$ 는 $+$ 부류, $(2,-1)$ 은 $-$ 부류라고 할 때 원점을 지나는 어느 직선이 둘을 가르는지 묻는 문제가 이 꼴이다. 퍼셉트론은 직선의 법선 벡터에 틀린 점을 부호와 함께 더하는 일만 되풀이하고, 두 부류를 가르는 직선이 있으면 정해진 횟수 안에 그런 직선에 닿는다.

# 직관

원점을 지나는 직선은 법선 벡터 $w$ 로 정하고, 점 $x$ 의 부류를 [내적 공간](inner-product-spaces.md)의 내적 $\langle w,x\rangle$ 의 부호로 판정한다. 부호가 부류와 같으면 맞게 가른 것이다. $w=(0,0)$ 에서 시작하면 모든 내적이 $0$ 이라 아무 점도 맞게 가르지 못한다.

$+$ 부류의 점 $a=(1,2)$ 를 틀렸으므로 $w$ 에 $a$ 를 더해 $w=(1,2)$ 로 고친다. 그러면 $\langle w,a\rangle$ 가 $\Vert a\Vert^2=5$ 만큼 커진다. 이제 $-$ 부류의 점 $b=(2,-1)$ 에서 $\langle w,b\rangle=2-2=0$ 이라 부호가 음수가 아니므로 틀렸고, $w$ 에서 $b$ 를 빼서 $w=(-1,3)$ 으로 고친다.

$w=(-1,3)$ 에서 $\langle w,a\rangle=5\gt 0$ 이고 $\langle w,b\rangle=-5\lt 0$ 이라 두 점을 모두 맞게 가른다. 틀린 점을 부류의 부호를 붙여 법선 벡터에 더하는 이 규칙을 퍼셉트론이라 부른다.

# 정의

자료가 $(x_1,y_1),\dots,(x_m,y_m)$ 이고 $x_i\in\mathbb R^n$ , $y_i\in\lbrace -1,+1\rbrace$ 이라 하자. **퍼셉트론** 은 $w_0=0$ 에서 시작해 자료를 차례로 보며, $y_i\langle w,x_i\rangle\le 0$ 인 점을 만날 때마다 다음으로 고치는 규칙이다.

$$
w\leftarrow w+y_ix_i
$$

모든 점에서 $y_i\langle w,x_i\rangle\gt 0$ 이면 멈춘다. 원점을 지나지 않는 직선은 각 $x_i$ 뒤에 성분 $1$ 을 붙여 같은 규칙으로 다룬다. 직관 절의 예는 $x_1=a$ , $y_1=+1$ , $x_2=b$ , $y_2=-1$ 이다.

자료가 **여백(margin)** $\gamma\gt 0$ 으로 **선형분리가능(linearly separable)** 하다는 것은 $\Vert u\Vert=1$ 이고 모든 $i$ 에서 $y_i\langle u,x_i\rangle\ge\gamma$ 인 $u$ 가 있다는 것이다. 직관 절의 자료는 $u=(-1,3)/\sqrt{10}$ 에서 $\gamma=5/\sqrt{10}$ 이다.

# 성질

## Novikoff 정리

정리. 모든 $i$ 에서 $\Vert x_i\Vert\le R$ 이고 자료가 여백 $\gamma$ 로 선형분리가능하면, 퍼셉트론이 고치는 횟수는 $(R/\gamma)^2$ 이하다[^1].

증명의 요지. $k$ 번 고친 뒤의 벡터를 $w_k$ 라 한다. 한 번 고칠 때마다 $\langle w,u\rangle$ 는 $y_i\langle x_i,u\rangle\ge\gamma$ 만큼 늘어 $\langle w_k,u\rangle\ge k\gamma$ 다. $\Vert w\Vert^2$ 는 $2y_i\langle w,x_i\rangle+\Vert x_i\Vert^2\le R^2$ 만큼만 늘어 $\Vert w_k\Vert^2\le kR^2$ 다. [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $k\gamma\le\Vert w_k\Vert\le\sqrt kR$ 이므로 $k\le(R/\gamma)^2$ 이다.

고치는 횟수가 자료의 개수나 차원과 무관하고 $R/\gamma$ 에만 의존한다. 직관 절에서 $R=\sqrt5$ , $\gamma=5/\sqrt{10}$ 이므로 한계는 $2$ 이고, 실제로 두 번 고쳤다.

## 분리할 수 없는 자료

선형분리가능하지 않으면 어떤 $w$ 도 모든 점을 맞게 가르지 못하므로 고치기가 끝나지 않는다. 평면의 네 점 $(0,0)$ , $(1,1)$ 을 $-$ 부류, $(0,1)$ , $(1,0)$ 을 $+$ 부류로 두면, 직선 $w_1s+w_2t+c=0$ 이 가르려면 $c\lt 0$ , $w_1+w_2+c\lt 0$ , $w_2+c\gt 0$ , $w_1+c\gt 0$ 이어야 한다. 앞의 두 식을 더하면 $w_1+w_2+2c\lt 0$ 이고 뒤의 두 식을 더하면 $w_1+w_2+2c\gt 0$ 이라 모순이다. 이 예를 배타적 논리합(exclusive or) 문제라 부르고, Minsky 와 Papert 가 한 층짜리 퍼셉트론의 한계로 들었다[^2].

## 부분기울기법으로서의 퍼셉트론

손실 $\max(0,\thinspace -y_i\langle w,x_i\rangle)$ 는 틀린 점에서 부분기울기 $-y_ix_i$ 를 가진다. 이 손실에 보폭 $1$ 로 표본 하나씩 [부분기울기법](subgradient-method.md)의 걸음을 밟으면 퍼셉트론의 규칙이다. [Kaczmarz 방법](kaczmarz-method.md)의 반공간 이완법도 어긴 부등식 쪽으로만 옮긴다는 점에서 같은 꼴이다.

# 활용

- 온라인 학습. 자료가 하나씩 들어오고 매번 예측한 뒤 정답을 받는 상황에서, Novikoff 정리는 틀리는 횟수의 상한 $(R/\gamma)^2$ 을 자료의 순서와 무관하게 준다.
- 커널 퍼셉트론(kernel perceptron). $w$ 는 언제나 $\sum_i\alpha_iy_ix_i$ 꼴이므로 내적 $\langle x_i,x\rangle$ 만으로 예측과 갱신을 할 수 있다. 내적을 [재생핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)의 핵 $k(x_i,x)$ 로 바꾸면 비선형 경계를 배운다.
- [서포트 벡터 머신](support-vector-machine.md). 퍼셉트론은 가르는 직선 가운데 아무것에서나 멈추고, 서포트 벡터 머신은 여백 $\gamma$ 가 가장 큰 직선을 고른다. Novikoff 정리의 한계는 그 최대 여백으로 정해진다.
- 다층 신경망. 퍼셉트론을 여러 층으로 쌓고 부호 함수를 매끄러운 함수로 바꾼 것이 다층 퍼셉트론(multilayer perceptron)이고, 배타적 논리합처럼 한 층으로 가를 수 없는 자료를 가른다.

[^1]: A. B. J. Novikoff, *On convergence proofs on perceptrons*, Proceedings of the Symposium on the Mathematical Theory of Automata 12, Polytechnic Institute of Brooklyn, 1962, 615–622. 규칙 자체는 F. Rosenblatt, *The perceptron: a probabilistic model for information storage and organization in the brain*, Psychological Review 65(6), 1958, 386–408.
[^2]: M. Minsky and S. Papert, *Perceptrons*, MIT Press, 1969.

# 연관 문서

## 선수지식

- [기계학습 개관](machine-learning-overview.md)
- [내적 공간](inner-product-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #linear_algebra #optimization
