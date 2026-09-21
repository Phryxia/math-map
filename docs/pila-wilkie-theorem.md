# Pila–Wilkie 정리

# 개요

[o-최소 구조](o-minimality.md)에서 정의 가능한 집합에서 대수적인 부분을 걷어 내면, 남은 부분에 놓인 유리점의 개수가 높이의 임의로 작은 거듭제곱으로 묶인다.

이 셈이 산술기하의 도구가 된다. 유리점의 개수를 위에서 묶는 이 상한과 Galois 궤도의 크기를 아래에서 묶는 하한을 견주면 특별한 점이 유한 개라는 결론이 나온다.

# 직관

곡선 $y=2^x$ 위에서 두 좌표가 모두 유리수인 점을 찾는다. $x$ 가 정수 $n$ 이면 $(n,2^n)$ 이 그런 점이다. $x$ 가 정수가 아닌 유리수이면 $2^x$ 가 무리수이므로 그런 점은 없다.

두 좌표의 분모와 분자를 $T$ 이하로 제한하면 남는 점은 $2^n\le T$ 인 $(n,2^n)$ 뿐이고 개수가 $\log_2 T$ 남짓이다. $T$ 를 백만으로 키워도 스무 개뿐이다.

직선 $y=x$ 에서는 사정이 다르다. 분모와 분자가 $T$ 이하인 유리수 $q$ 마다 $(q,q)$ 가 유리점이고, 그런 $q$ 가 $T^2$ 개 남짓이다. 거듭제곱만큼 많다.

두 곡선의 차이는 하나가 대수방정식의 해집합이고 다른 하나가 아니라는 것이다. 유리점을 거듭제곱만큼 담은 부분은 대수적이고, 대수적인 부분을 떼어 내고 남은 자리에는 유리점이 거듭제곱보다 적게 있다.

# 정의

## 높이

기약분수 $a/b$ 의 **높이**는 $H(a/b)=\max(\vert a\vert,\vert b\vert)$ 다. 점 $x=(x_1,\dots,x_n)\in\mathbb Q^n$ 의 높이는 좌표 높이의 최댓값이다.

집합 $X\subseteq\mathbb R^n$ 의 **셈 함수**를 다음으로 둔다.

$$
N(X,T)=\char35{}\lbrace x\in X\cap\mathbb Q^n: H(x)\le T\rbrace
$$

## 대수적 부분

$X$ 에 포함되는 연결 반대수적 집합 가운데 차원이 양수인 것들의 합집합을 $X^{\mathrm{alg}}$ 라 하고 **대수적 부분**이라 한다. 나머지 $X^{\mathrm{trans}}=X\setminus X^{\mathrm{alg}}$ 가 **초월적 부분**이다.

반대수적 집합은 다항식의 등식과 부등식으로 정해지는 집합이다. 직선 $y=x$ 는 자기 자신이 반대수적이므로 $X^{\mathrm{trans}}$ 가 비어 있고, 곡선 $y=2^x$ 는 어떤 대수 곡선의 조각도 담지 않으므로 $X^{\mathrm{alg}}$ 가 비어 있다.

# 성질

## 셈 정리

**정리(Pila, Wilkie).** $X\subseteq\mathbb R^n$ 이 o-최소 구조에서 정의 가능하면, 각 $\varepsilon\gt 0$ 에 대해 상수 $c(X,\varepsilon)$ 이 있어 모든 $T\ge 1$ 에서 다음이 성립한다.[^1]

$$
N(X^{\mathrm{trans}},T)\ \le\ c(X,\varepsilon)\thinspace T^{\varepsilon}
$$

대수적 부분을 빼는 것은 없앨 수 없는 조건이다. $X$ 가 직선을 하나라도 담으면 $N(X,T)$ 가 $T^2$ 규모로 커진다.

증명은 상수 $c(X,\varepsilon)$ 을 명시하지 않는다. 정의 가능한 족에 대해서는 상수를 족의 매개변수와 무관하게 잡을 수 있다.

## 증명의 요지

두 재료를 합친다.

첫째는 매개변수화다. 정의 가능한 집합 $X$ 를 유한 개의 사상 $\varphi_i:(0,1)^{k}\to X$ 의 상으로 덮되, 각 $\varphi_i$ 가 $r$ 계 도함수까지 크기 $1$ 이하가 되게 잡을 수 있다. 덮는 개수는 $r$ 에만 의존하고 $T$ 에 의존하지 않는다.

둘째는 결정자 방법이다. 도함수가 유계인 곡선 조각 위에서 높이 $T$ 이하의 유리점을 $D$ 개 고르면, 단항식 값으로 만든 $D\times D$ 행렬의 행렬식은 Taylor 전개로 위에서 묶이고 정수 분모를 갖는 유리수라 $0$ 이 아니면 아래에서도 묶인다. 두 한계가 충돌하면 행렬식이 $0$ 이고, 그 점들은 차수 $d$ 의 대수적 초곡면 하나 위에 놓인다.[^2]

매개변수화로 얻은 각 조각에 결정자 방법을 적용하면 유리점이 $T^{\varepsilon}$ 개의 초곡면에 모인다. 초곡면과 $X$ 의 교차는 차원이 낮으므로 차원에 대한 귀납으로 끝난다. 교차에 남는 양의 차원 조각은 $X^{\mathrm{alg}}$ 에 들어가므로 셈에서 빠진다. ∎

# 활용

- **Manin–Mumford 추측.** 아벨 다양체 $A$ 안의 곡선 $C$ 가 $A$ 의 부분아벨다양체의 이동이 아니면 $C$ 위의 꼬임점이 유한 개다. Pila 와 Zannier 의 증명은 균일화 사상으로 $C$ 를 정의 가능한 집합으로 올리고, 꼬임점을 유리점에 대응시킨 뒤 위 상한과 꼬임점 Galois 궤도의 하한을 견준다.[^3]
- **André–Oort 추측.** [모듈러 곡선](modular-curves.md)의 곱 안에서 허수곱(complex multiplication, CM)을 갖는 점들의 Zariski 폐포가 특별한 부분다양체라는 진술을 Pila 가 같은 전략으로 증명했다. $j$ 함수의 기본영역 위 제한이 정의 가능하다는 것이 전제다.[^4]
- **높이 이론과의 결합.** 위 두 증명은 Galois 궤도의 크기를 [표준 높이](canonical-height.md)와 판별식으로 아래에서 묶는 하한을 쓴다. 상한과 하한의 지수가 엇갈리는 구간에서만 결론이 나오므로 두 이론의 정량적 형태가 함께 필요하다.

[^1]: Jonathan Pila, A. J. Wilkie, *The rational points of a definable set*, Duke Mathematical Journal 133 (2006), 591–616.
[^2]: Enrico Bombieri, Jonathan Pila, *The number of integral points on arcs and ovals*, Duke Mathematical Journal 59 (1989), 337–357. 결정자 방법의 원형이 이 논문의 평면 곡선 셈이다.
[^3]: Jonathan Pila, Umberto Zannier, *Rational points in periodic analytic sets and the Manin–Mumford conjecture*, Rendiconti Lincei 19 (2008), 149–162.
[^4]: Jonathan Pila, *O-minimality and the André–Oort conjecture for $\mathbb C^n$*, Annals of Mathematics 173 (2011), 1779–1840.

# 연관 문서

## 선수지식

- [o-최소성](o-minimality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#logic #number_theory #algebra #foundations
