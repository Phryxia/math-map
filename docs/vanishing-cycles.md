# 소멸 사이클

# 개요

소멸 사이클은 특이 올로 다가갈 때 한 점으로 줄어드는 호몰로지류다. 복소 다양체 위의 정칙 함수가 비퇴화 임계점 하나를 가지면 그 근처의 올은 구에 호모토피 동치이고, 임계값에서 그 구가 점으로 찌그러든다. 임계값 주위를 한 바퀴 도는 모노드로미가 이 류 하나로 적히며, 그 식이 Picard–Lefschetz 공식이다.

# 직관

$f(z)=z^2$ 를 $\mathbb C$ 에서 본다. $t\ne 0$ 이면 올 $f^{-1}(t)$ 는 두 점 $\pm\sqrt t$ 이고 $t=0$ 이면 한 점이다. $t$ 를 $0$ 으로 보내면 두 점이 서로 다가가 하나로 붙는다. 두 점을 잇는 선분의 길이가 $0$ 으로 줄어든다.

$t$ 를 $0$ 에 떨어뜨리지 않고 $0$ 주위로 한 바퀴 돌린다. $t=\varepsilon e^{i\theta}$ 에서 $\theta$ 를 $0$ 부터 $2\pi$ 까지 보내면 $\sqrt t=\sqrt\varepsilon\thinspace e^{i\theta/2}$ 가 $\sqrt\varepsilon$ 에서 $-\sqrt\varepsilon$ 으로 간다. 올은 같은 두 점의 집합으로 돌아오지만 두 점이 자리를 바꾼다.

두 점의 차 $\delta=\lbrack p_+\rbrack-\lbrack p_-\rbrack$ 은 올의 축소 $0$ 차 호몰로지의 원소다. 한 바퀴 돌리면 두 점이 바뀌므로 $\delta$ 가 $-\delta$ 로 간다. 그 값이 $-1$ 인 것은 $\delta$ 가 임계값에서 줄어드는 류라는 데서 나온다.

변수를 늘려 $f(z_1,\dots,z_{n+1})=z_1^2+\cdots+z_{n+1}^2$ 로 같은 일을 한다. $t\gt 0$ 에서 올의 실점은 방정식 $x_1^2+\cdots+x_{n+1}^2=t$ 를 만족하는 반지름 $\sqrt t$ 인 $n$ 차원 구이고, $t\to 0$ 에서 점으로 줄어든다. 그 구가 올의 $n$ 차 호몰로지를 생성하며, 한 바퀴 돌릴 때 그 류가 얼마나 바뀌는지가 Picard–Lefschetz 공식이다.

# 정의

## 소멸 사이클

$X$ 를 차원 $n+1$ 인 복소 다양체, $f:X\to\mathbb C$ 를 정칙 함수, $x_0$ 을 $f$ 의 비퇴화 임계점이라 한다. 정칙 Morse 보조정리로 $x_0$ 의 좌표를 잡으면 다음과 같다.

$$
f(z)=f(x_0)+z_1^2+\cdots+z_{n+1}^2
$$

$x_0$ 을 품은 작은 공 $B$ 와 작은 원판 $D=\lbrace t:\vert t-f(x_0)\vert\lt\varepsilon\rbrace$ 에 대해 $X_t=f^{-1}(t)\cap B$ 라 한다. $t\ne f(x_0)$ 이면 $X_t$ 는 $n$ 차원 구 $S^n$ 에 호모토피 동치다. 그 구의 기본류가 주는

$$
\delta\in H_n(X_t;\mathbb Z)
$$

가 **소멸 사이클**이다. 부호는 구의 방향을 어느 쪽으로 잡는지에 달렸다.

## 모노드로미

$D$ 의 경계를 따라 올을 옮기면 $X_t$ 의 자기 미분동형이 생기고, 그것이 호몰로지에 작용한다. 이 작용

$$
T:H_n(X_t;\mathbb Z)\to H_n(X_t;\mathbb Z)
$$

를 **모노드로미**라 한다. $f^{-1}(\partial D)\cap B\to\partial D$ 는 올다발이고 $T$ 는 그 특성 사상이 주는 작용이다.

## Milnor 올다발

$f(x_0)=0$ 으로 옮기고 $B$ 를 반지름 $\eta$ 인 공으로 잡으면, $\varepsilon\ll\eta$ 에서 사상 $f:B\cap f^{-1}(D\setminus\lbrace 0\rbrace)\to D\setminus\lbrace 0\rbrace$ 가 국소자명 올다발이다. 이것을 **Milnor 올다발**이라 하고, 그 올이 위의 $X_t$ 다.

# 성질

## Picard–Lefschetz 공식

**정리.** 비퇴화 임계점 하나를 둘러싼 모노드로미는 다음 식으로 주어진다[^1].

$$
T(x)=x+(-1)^{(n+1)(n+2)/2}\thinspace\langle x,\delta\rangle\thinspace\delta
$$

$\langle\cdot,\cdot\rangle$ 은 올 $X_t$ 의 교차형식이다.

증명의 요지. 모노드로미를 주는 미분동형은 공 $B$ 밖에서 항등으로 잡을 수 있으므로 $\delta$ 의 근방에서만 호몰로지를 움직인다. 국소 모형 $\sum z_i^2=t$ 의 올은 $S^n$ 의 접원판다발에 미분동형이고, 한 바퀴 도는 사상은 그 다발에서 측지 흐름을 반 바퀴 돈 것이다. 그 사상이 류 $x$ 를 옮기는 양은 $x$ 와 $\delta$ 의 교차수에 비례하고, 비례상수는 $S^n$ 의 접다발의 방향에서 나오는 부호다.

$n=0$ 에서 이 식은 직관 절의 계산이다. 교차형식이 $\langle\delta,\delta\rangle=2$ 이고 부호가 $-1$ 이므로 $T(\delta)=-\delta$ 다. $n=1$ 에서는 $\delta$ 를 따른 Dehn 꼬임이 모노드로미이고 $\langle\delta,\delta\rangle=0$ 이므로 $T(\delta)=\delta$ 다.

## 소멸 사이클의 자기교차수

$n$ 이 짝수이면 $\langle\delta,\delta\rangle=(-1)^{n/2}\cdot 2$ 이고 $n$ 이 홀수이면 $\langle\delta,\delta\rangle=0$ 이다. 복소 곡면의 올을 주는 $n=2$ 에서 그 값이 $-2$ 다.

따라서 $n$ 이 짝수일 때 $T$ 는 $\delta$ 를 $-\delta$ 로 보내고 $\delta$ 의 직교여공간에서 항등이다. 반사이므로 $T^2=\mathrm{id}$ 다. $n$ 이 홀수일 때는 $\langle\delta,\delta\rangle=0$ 이라 $T(\delta)=\delta$ 이고 $T$ 의 위수가 무한이다.

## Lefschetz 올다발

사영다양체 $X$ 의 초평면 절단의 펜슬을 잡으면 $X$ 를 폭발한 것이 $\mathbb P^1$ 위의 올다발이 되고, 유한 개의 올만 비퇴화 임계점 하나씩을 갖는다. 이것이 **Lefschetz 올다발**이다.

## 약한 Lefschetz 정리

**정리**(약한 Lefschetz)**.** $X$ 가 차원 $n+1$ 인 매끄러운 사영다양체이고 $Y\subset X$ 가 매끄러운 초평면 절단이면 제한 사상 $H^k(X;\mathbb Q)\to H^k(Y;\mathbb Q)$ 는 $k\lt n$ 에서 동형이고 $k=n$ 에서 단사다.

증명의 요지. $X\setminus Y$ 는 아핀다양체이고 거리함수의 Morse 이론으로 차원 $n+1$ 이하의 [CW 복합체](cw-complexes.md)(closure-finite weak topology)에 호모토피 동치다. 쌍 $(X,Y)$ 의 상대 호몰로지가 $n+1$ 차 이상에서만 살아남으므로 그 아래 차수에서 제한 사상이 동형이다. 각 특이 올에서 붙는 세포의 호몰로지류가 소멸 사이클이고, $k=n$ 에서 핵이 소멸 사이클이 생성하는 부분공간의 상이 된다.

## 모노드로미군

Lefschetz 올다발의 특이값이 여러 개이면 각각을 둘러싼 모노드로미가 생기고, 그것들이 생성하는 군을 **모노드로미군**이라 한다. 생성원이 전부 소멸 사이클에 대한 반사이므로 모노드로미군은 반사군의 몫으로 적힌다.

# 활용

- [Morse 이론](morse-theory.md)의 활용 절은 정칙 함수의 Morse 이론이 소멸 사이클로 호몰로지의 생성원을 준다고 적는다. 실 Morse 이론에서 임계점이 세포를 붙이는 자리에 복소 쪽에서는 소멸 사이클이 온다.
- [Hodge 이론](hodge-theory.md)의 Poincaré 쌍대성 절이 주는 교차형식이 Picard–Lefschetz 공식의 $\langle\cdot,\cdot\rangle$ 이다.
- [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)은 환원 단계에서 약한 Lefschetz 정리로 중간 코호몰로지만 남기고, 모노드로미의 Zariski 조밀성으로 Frobenius 고윳값의 절댓값을 결정한다.
- [Kähler 다양체](kahler-manifolds.md)의 초평면 절단에 Lefschetz 올다발을 세우면 올이 차원 $n$ 인 Kähler 다양체이고, 소멸 사이클이 그 올의 중간 호몰로지에 놓인다.

[^1]: C. Voisin, *Hodge Theory and Complex Algebraic Geometry II*, Cambridge University Press, 2003, Theorem 3.16. 부호 규약은 올의 방향과 교차형식의 정의에 따라 저자마다 다르다.

# 연관 문서

## 선수지식

- [Morse 이론](morse-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #algebraic_topology #topology
