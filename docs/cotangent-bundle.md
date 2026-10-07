# 여접다발

# 개요

여접다발은 다양체의 각 점에 그 점의 여접공간을 붙여 만든 벡터다발이다. 접다발과 달리 좌표를 고르지 않고 정의되는 1형식을 갖고, 그 1형식의 외미분이 심플렉틱 형식이어서 여접다발은 언제나 [심플렉틱 다양체](symplectic-manifolds.md)다. 고전역학의 위상공간이 이 꼴이고, Darboux 정리가 모든 심플렉틱 다양체를 국소적으로 이 꼴로 만든다.

# 직관

[접다발](tangent-bundle.md) $TN$ 위에는 좌표를 고르지 않고 적을 수 있는 1형식이 없다. 여접다발 $T^\ast N$ 위에는 있다. 한쪽에만 있는 이유를 본다.

$T^\ast N$ 의 점은 쌍 $(q,p)$ 이고, 여기서 $q\in N$ 이고 $p$ 는 접공간 $T\_qN$ 위의 선형함수다. 1형식을 적으려면 $T^\ast N$ 의 접벡터마다 수 하나를 정해야 한다. 점 $(q,p)$ 에서 접벡터 $v$ 를 하나 잡고, 사영 $\pi(q,p)=q$ 로 밀어 $T\_qN$ 의 벡터 $d\pi(v)$ 를 만든다. 그 점이 이미 가지고 있는 $p$ 를 그 벡터에 먹이면 수 $p(d\pi(v))$ 가 나온다. 좌표를 고르지 않고 접벡터에서 수가 나왔다.

$TN$ 에서는 같은 일이 되지 않는다. 점 $(q,u)$ 의 $u$ 는 벡터이고, $d\pi(v)$ 에 먹일 수 있는 선형함수가 아니다. 벡터를 수로 바꾸려면 계량 같은 추가 구조가 필요하다.

좌표 $(q^1,\dots,q^n)$ 과 거기서 나오는 섬유 좌표 $(p\_1,\dots,p\_n)$ 으로 적으면 위의 1형식이 $\sum\_i p\_i\thinspace dq^i$ 이고, 그 외미분에 음수를 붙이면 $\sum\_i dq^i\wedge dp\_i$ 다. 이것이 심플렉틱 형식의 표준형이다.

# 정의

## 여접다발

매끄러운 $n$ 차원 다양체 $N$ 에 대해 각 점의 여접공간 $T\_q^\ast N=(T\_qN)^\ast$ 를 모은 집합

$$
T^\ast N=\bigsqcup\_{q\in N}T\_q^\ast N
$$

이 **여접다발**이고, $\pi\colon T^\ast N\to N$ 이 사영이다. $N$ 의 좌표 $q^i$ 가 $dq^i$ 를 섬유의 기저로 주므로 $T^\ast N$ 은 $2n$ 차원 다양체이고 좌표는 $(q^i,p\_i)$ 다.

## 표준 1형식

$T^\ast N$ 위의 **표준 1형식** $\lambda$ 는 점 $(q,p)$ 에서 접벡터 $v$ 에 다음을 대응시킨다.

$$
\lambda\_{(q,p)}(v)=p(d\pi(v))
$$

좌표로는 $\lambda=\sum\_i p\_i\thinspace dq^i$ 다. **표준 심플렉틱 형식**은 $\omega=-d\lambda$ 이고 좌표로 $\omega=\sum\_i dq^i\wedge dp\_i$ 다.

# 성질

## 심플렉틱 구조

$\omega=-d\lambda$ 는 닫혀 있고 비퇴화하므로 $T^\ast N$ 은 심플렉틱 다양체다. 닫힘은 $d\omega=-dd\lambda=0$ 에서 나온다. 비퇴화성은 좌표 표현에서 보이고, $\omega$ 의 행렬이 $2n\times 2n$ 꼴 $\begin{pmatrix}0&I\cr -I&0\end{pmatrix}$ 이므로 가역이다.

$\omega$ 가 완전형식이므로 콤팩트 심플렉틱 다양체는 여접다발이 될 수 없다. 콤팩트하고 경계가 없으면 $\int\omega^n\ne 0$ 인데 완전형식의 거듭제곱은 완전이고 적분이 $0$ 이다.

## Lagrangian 부분다양체

영단면 $\lbrace p=0\rbrace$ 과 각 섬유 $T\_q^\ast N$ 은 $n$ 차원이고 그 위에서 $\lambda$ 가 소멸하므로 $\omega$ 도 소멸한다. 둘 다 Lagrangian 부분다양체다. 더 일반적으로 1형식 $\alpha$ 의 그래프 $\lbrace(q,\alpha\_q)\rbrace$ 가 Lagrangian 인 것은 $d\alpha=0$ 과 같다.

## 정준변환

미분동형 $\varphi\colon T^\ast N\to T^\ast N$ 이 $\varphi^\ast\omega=\omega$ 를 만족하면 **정준변환**이라 한다. $\varphi^\ast\lambda=\lambda$ 까지 성립하는 것은 더 강한 조건이고, $\varphi^\ast\lambda-\lambda$ 가 완전형식이면 정준변환이다. $N$ 의 미분동형 $f$ 는 여접사상으로 $T^\ast N$ 에 올라가고 그 올림은 $\lambda$ 를 보존한다.

## 측지선 흐름

$N$ 에 Riemann 계량이 있으면 그것이 $TN$ 과 $T^\ast N$ 사이의 동형을 주고, 함수 $H(q,p)=\frac12\lvert p\rvert^2$ 가 정해진다. $H$ 의 Hamilton 흐름의 궤적을 $\pi$ 로 내리면 [측지선](geodesics.md)이다. 측지선 방정식의 2계 꼴과 Hamilton 방정식의 1계 꼴이 이 동형으로 옮겨진다.

# 활용

- **심플렉틱 다양체의 국소 모형.** [심플렉틱 다양체](symplectic-manifolds.md)의 Darboux 정리는 모든 심플렉틱 다양체가 국소적으로 $T^\ast\mathbb R^n$ 과 심플렉틱 동형이라는 진술이다. 표준형 $\sum dq^i\wedge dp\_i$ 가 여접다발에서 좌표를 고르지 않고 나온 형식이다.
- **Hamilton 역학.** 위치 공간이 $N$ 인 계의 위상공간이 $T^\ast N$ 이고, $p$ 가 운동량이다. Hamilton 함수의 흐름이 운동을 주고, 정준변환이 좌표 선택과 무관한 변환이다.
- **미분형식의 차수 올리기.** [미분형식](differential-forms.md)의 1형식은 $T^\ast N$ 의 단면이다. $k$ 형식은 $T^\ast N$ 의 외대수 다발의 단면이므로, 여접다발이 미분형식 전체의 바탕이 된다.

# 연관 문서

## 선수지식

- [접다발](tangent-bundle.md)
- [심플렉틱 다양체](symplectic-manifolds.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #topology #analysis
