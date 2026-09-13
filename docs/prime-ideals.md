# 소 아이디얼과 극대 아이디얼

소 아이디얼과 극대 아이디얼은 몫환에 영인수가 없는지, 또는 모든 영이 아닌 원소가 가역인지 판정하는 아이디얼이다.

## 정의

항등원을 가진 가환환 R의 진아이디얼 P가 소 아이디얼이라는 것은 모든 a,b∈R에 대해 다음 조건이 성립한다는 뜻이다.

$$
ab\in P\quad\Longrightarrow\quad a\in P\ \text{또는}\ b\in P
$$

진아이디얼 M이 극대 아이디얼이라는 것은 M을 진부분집합으로 포함하는 진아이디얼이 없다는 뜻이다. 즉 M⊆J⊆R인 아이디얼 J는 M 또는 R뿐이다.

## 성질

소 아이디얼과 극대 아이디얼은 몫환으로 다음처럼 판정한다.

$$
P\text{가 소 아이디얼}\quad\Longleftrightarrow\quad R/P\text{가 정역}
$$

$$
M\text{이 극대 아이디얼}\quad\Longleftrightarrow\quad R/M\text{가 체}
$$

첫 등식은 몫환에서 두 동치류의 곱이 0이라는 조건이 ab∈P와 같다는 데서 따른다. 둘째 등식은 R/M의 아이디얼들이 M을 포함하는 R의 아이디얼들과 대응하고, 가환환이 체일 필요충분조건이 영 아이디얼과 환 전체만을 아이디얼로 갖는 것이라는 사실을 쓴다.

모든 체는 정역이므로 모든 극대 아이디얼은 소 아이디얼이다. 역은 일반적으로 거짓이다. 정수환에서 영 아이디얼은 소 아이디얼이지만 극대 아이디얼은 아니다.

체 k에 대한 다항식환 k[x,y]에서 (x)는 소 아이디얼이지만 극대가 아니다. 반면 (x,y)는 극대 아이디얼이다.

$$
k[x,y]/(x)\cong k[y],\qquad k[x,y]/(x,y)\cong k
$$

## 활용

환을 영인수가 없는 몫이나 체인 몫으로 단순화하고, 다항식의 공통 영점과 대수적 조건을 연결한다. 소 아이디얼들의 포함관계는 환의 spectrum과 Krull dimension을 정의하며, 극대 아이디얼은 체로 값을 평가하는 대수적 점을 기술한다.

## 기타 참고 문헌

- [MIT OpenCourseWare 18.703, Lecture 18: Prime and Maximal Ideals](https://ocw.mit.edu/courses/18-703-modern-algebra-spring-2013/247dc7bcf731827674f4a2338f929a7a_MIT18_703S13_pra_l_18.pdf): Definition-Lemma 18.1, Definition 18.6, Theorem 18.8과 Corollary 18.9.

# 연관 문서

## 선수지식

- [아이디얼과 몫환](ideals-quotient-rings.md)

## 더 알아보기

- [체](fields.md)
- [환의 국소화](localization-rings.md)

#ring_theory
